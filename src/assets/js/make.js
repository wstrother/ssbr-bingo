// import goals from "./goals";
import goals_remix from "./goals_remix";

const goals = goals_remix;


class TemplateFiller {
    constructor(name, choices) {
        this.name = name;
        this.choices = Array.from(choices);
        this.chosen = [];
    }

    getChoice() {
        let choices = this.choices.filter(choice => !this.chosen.includes(choice));
        console.log(`\t${this.name} is selecting from remaining choices: ${choices}`);

        let choice = Math.floor(Math.random() * choices.length);
        
        this.chosen.push(choices[choice]);
        console.log(`\tPushing ${choices[choice]} to ${this.name} chosen list`);
        if (this.choices.length == this.chosen.length) this.chosen = [];
        
        return choices[choice];
    }
}


class GoalGenerator {
    constructor() {
        // choice trackers
        this.fillers = [
            new TemplateFiller("CHARACTERS", goals.ALL_CHARACTERS),
            new TemplateFiller("SPECIAL CHARS", goals.SPECIAL_CHARACTERS),
            new TemplateFiller("NO POLY", goals.NO_POLYGONS),
            new TemplateFiller("REMIX LEVELS", goals.REMIX_LEVELS),
            new TemplateFiller("WEAPONS", goals.ITEMS['weapons']),
            new TemplateFiller("HEALING ITEMS", goals.ITEMS['healing_items']),
            new TemplateFiller("BONUSES", goals.BONUSES),
            new TemplateFiller("LEVELS", goals.CLASSIC_LEVELS),
            new TemplateFiller("ALL LEVELS", goals.ALL_LEVELS),
            new TemplateFiller("STAGE KOS", goals.STAGE_KILLS),
            new TemplateFiller("MEME MOVES", goals.MEME_MOVES),
            new TemplateFiller("PKMN", goals.POKEMON)
        ];

        this.goals = {};
    }

    getFiller(choices) {
        return this.fillers.filter(
            filler => JSON.stringify(filler.choices) == JSON.stringify(choices)
        )[0];
    }

    fillTemplate(template, choices_list) {
        console.log(`Selected template: ${template}`);
        let slots = (template.match(/{}/g) || []).length;
        let selected = [];
        let c_i = 0;
        let filler;

        for (let i = 0; i < slots; i++) {
            if (i < choices_list.length) c_i = i;

            filler = this.getFiller(choices_list[c_i]);
            console.log(`\tFilling slot ${i} with ${filler.name}`);
            selected.push(filler.getChoice());
        }

        selected.forEach(c => {
            template = template.replace("{}", c);
        });

        return template;
    }

    getFromCategory(goal_set, value) {
        let choiceKeys = Object.keys(goal_set);
        let hardKeys = Object.keys(goals.HARD_GOALS).filter(k => choiceKeys.includes(k));

        if (value > 2 && hardKeys.length) {
            choiceKeys = choiceKeys.filter(k => hardKeys.includes(k));
        } else {
            choiceKeys = choiceKeys.filter(k => !hardKeys.includes(k));
        }
        
        let choice = choiceKeys[Math.floor(Math.random() * choiceKeys.length)];
        let goal_obj = goal_set[choice];
        let goal_text;

        if (Array.isArray(goal_obj)) {
            goal_text = this.fillTemplate(goal_obj[0], goal_obj.slice(1));
        } else {
            goal_text = goal_obj;
        }

        if (this.isDuplicate(goal_text)) return this.getFromCategory(goal_set, value);

        return goal_text;
    }

    getGoals(kSets, board) {
        let first = Array.from(kSets[0]);
        let current = 1;

        if (first.length <= 2) {
            first.push(...kSets[1]);
            current++;
        }

        first.forEach(square => {
            this.goals[square] = this.getFromCategory(
                goals.SPEEDRUN_GOALS, 
                board.getValue(square)
            );
        });

        while (current < kSets.length) {
            kSets[current].forEach(square => {
                this.goals[square] = this.getFromCategory(
                    [
                        goals.RNG_GOALS,
                        goals.POINTS_GOALS,
                        goals.CHALLENGE_GOALS,
                        goals.BONUS_GAME_GOALS
                    ][current % 4],
                    board.getValue(square)
                );
            });
            current++;
        }
        
        return this.goals;
    }

    isDuplicate(text) {
        Object.values(this.goals).forEach(g => {
            if (text == g) return true;
        });
    }
}

export {
    GoalGenerator
}