import goals from "./goals";


class TemplateFiller {
    constructor(choices) {
        this.choices = choices;
        this.chosen = [];
    }

    getChoice() {
        let choices = this.choices.filter(choice => !this.chosen.includes(choice));
        let choice = Math.floor(Math.random() * choices.length);
        
        this.chosen.push(choices[choice]);
        if (this.choices.length == this.chosen.length) this.chosen = [];

        return choices[choice];
    }
}


class GoalGenerator {
    constructor() {
        // choice trackers
        this.fillers = [
            new TemplateFiller(goals.CHARACTERS),
            new TemplateFiller(goals.ITEMS['weapons']),
            new TemplateFiller(goals.ITEMS['healing_items']),
            new TemplateFiller(goals.BONUSES),
            new TemplateFiller(goals.CLASSIC_LEVELS),
            new TemplateFiller(goals.STAGE_KILLS),
            new TemplateFiller(goals.POKEMON)
        ];

        this.goals = {};
    }

    getFiller(choices) {
        return this.fillers.filter(filler => filler.choices = choices)[0];
    }

    fillTemplate([template, ...choices_list]) {
        let slots = (template.match(/{}/g) || []).length;
        let selected = [];
        let c_i = 0;
        let filler;

        for (let i = 0; i < slots; i++) {
            if (i < choices_list.length) c_i = i;

            filler = this.getFiller(choices_list[c_i]);
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

        if (Array.isArray(goal_obj)) {
            return this.fillTemplate(goal_obj);
        } else {
            if (Object.keys(this.goals).includes(goal_obj)) {
                while (Object.keys(this.goals).includes(goal_obj)) {
                    goal_obj = choiceKeys[Math.floor(Math.random() * choiceKeys.length)];
                }
            }
            return goal_obj;
        }

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

        console.log(this.goals);
        return this.goals;
    }
}

export {
    GoalGenerator
}