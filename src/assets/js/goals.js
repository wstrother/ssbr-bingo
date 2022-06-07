// game constants

const CHARACTERS = [
    "Luigi", "Mario", "Donkey Kong", "Link", "Samus", "Captain Falcon",
    "Ness", "Yoshi", "Fox", "Kirby", "Pikachu", "Jigglypuff"
];

const ITEMS = {
    "all": [
        "MaximTomato",
        "Heart",
        "Star",
        "BeamSword",
        "HomeRunBat",
        "Fan",
        "StarRod",
        "RayGun",
        "FireFlower",
        "Hammer",
        "MotionSensorBomb",
        "Bob-omb",
        "Bumper",
        "GreenShell",
        "RedShell",
        "Pokeball"
    ],
    "weapons": [
        "BeamSword", "HomeRunBat", "Fan", "StarRod", "RayGun", "FireFlower",
        "Hammer", "MotionSensorBomb", "Bob-omb", "Bumper", "GreenShell",
        "RedShell", "Pokeball"
    ],
    "healing_items": [
        "MaximTomato", "Heart", "Star"
    ]
};

const POKEMON = [
    "Clefairy",
    "Beedrill",
    "Charizard",
    "Snorlax",
    "Chancey",
    "Hitmonlee",
    "Goldeen",
    "Blastoise",
    "Koffing",
    "Meowth",
    "Staryu"
]

const BONUSES = [
    "Cheap Shot",
    "Mystic or Comet Mystic",
    "DK Defender or DK Perfect",
    "Bros Calamity, Kirby Ranks, or Yoshi Rainbow",
    "Fighter Stance",
    "Hawk",
    "Heavy Damage",
    "Judo Warrior or Throw Down",
    "No Damage",
    "No Miss Clear",
    "Pacifist",
    "Pokemon Finish",
    "Shooter",
    "Special Move",
    "Smash-less or Smash-mania",
    "Speed Demon or Speed King",
    "Star Finish",
    "Good Friend or True Friend"
];

const STAGE_KILLS = [
    "a Tornado on Hyrule",
    "the Arwing on Sector Z",
    "the Acid on Planet Zebes",
    "a Pokemon on Saffron City"
];

const MEME_MOVES = [
    "Kirby Neutral B",
    "Kirby Up B",
    "DK Neutral B",
    "Yoshi Neutral B",
    "Puff Down B",
    "Luigi Up B",
    "Falcon Neutral B",
    "Pika Down B",
    "Ness Up B"
];

const CLASSIC_LEVELS = [
    "Link",
    "Yoshi Team",
    "Fox",
    "Mario Bros",
    "Pikachu",
    "Giant Donkey Kong",
    "Kirby Team",
    "Samus",
    "Metal Mario",
    "Polygon Team",
    "Master Hand"
];


// goal templates
const GOALS = {
    "templates": {
        "bonus_games": {
            "BTT_CHOICE": ["Beat Break the Targets w/ {}, {}, and {}", CHARACTERS], 
            "BTP_CHOICE": ["Beat Board the Platforms w/ {}, {}, and {}", CHARACTERS],
            "BTT_B_MOVE": ["Beat Break the Targets using only B moves with {}", CHARACTERS],
            "BONUS_BOTH": ["Beat Both Bonus Games w/ {}", CHARACTERS],
        },
        "speedrun": {
            "BEAT_VE_CHOICE": ["Beat Very Easy (5 Stock) w/ {}, {}, and {}", CHARACTERS],
            "BEAT_N_CHOICE": ["Beat Normal (3 Stock) w/ {} and {}", CHARACTERS],
            "BEAT_VH_CHOICE": ["Beat Very Hard (1 Stock) w/ {}", CHARACTERS],
        },
        "rng": {
            "WPN_KO": ["Get a KO (in 1P Game) with the {}", ITEMS['weapons']],
            "HEAL_3": ["Use 3 different {}s (in 1P Game)", ITEMS['healing_items']],
            "PKMN_CATCH": ["Catch a {} or {} (in 1P Game)", POKEMON],
            "STAGE_KO": ["Get a stage KO with {}", STAGE_KILLS],
        },
        "points": {
            "GET_BONUS": ["Get the {} Bonus", BONUSES],
        },
        "challenge": {
            "MEME_KO": ["Defeat {} (in 1P Game) using only {}", CLASSIC_LEVELS, MEME_MOVES]
        }
    },
    "unique": {
        "bonus_games": {
            "BTP_SD": "SD on Board the Platforms with every character",
            "BTT_SD": "SD on Break the Targets with every character",
            "BTP_6": "Complete 6 different Break the Targets stages",
            "BTT_6": "Complete 6 different Board the Platforms stages"
        },
        "speedrun": {
            "BEAT_VE": "Beat Very Easy (5 Stock)",
            "BEAT_N": "Beat Normal (3 Stock)",
            "BEAT_VH": "Beat Very Hard (1 Stock)",
            "BEAT_VH_NC": "Beat Very Hard (1 Stock) w/ No Continues"
        },
        // "rng": {},       No unique RNG goals yet
        "challenge": {
            "ZEBES_SPIKE": "Spike an opponent through the acid on Planet Zebes",
            "SHIELD_BREAK": "Break an opponent's shield",
            "1V3": "Win a 1 v 3 against Level 9 CPUs",
            "STAGE_PKMN_KO": "KO a Stage Pokemon on Saffron City",
            "REFLECTOR_BREAK": "Break Fox's Reflector",
            "200%": "Get an Opponent to 200%",
            "ALLY_KO": "KO an Ally in (1P Game)",
            "4_YOSHIS": "Get 4 Yoshis of the same color on screen"
        }
    },
    "impossible": [
        ["MEME_KO", CLASSIC_LEVELS[10], MEME_MOVES[0]],
        ["MEME_KO", CLASSIC_LEVELS[10], MEME_MOVES[3]]
    ]
};

// grouping goals into category lists
function assignGoals(target, ...goal_sets) {
    goal_sets.forEach(goals => {
        Object.assign(target, goals);
    });
}

const BONUS_GAME_GOALS = {};    // goals involving bonus games
assignGoals(BONUS_GAME_GOALS, GOALS.templates.bonus_games, GOALS.unique.bonus_games);

const SPEEDRUN_GOALS = {};      // goals involving doing a speedrun
assignGoals(SPEEDRUN_GOALS, GOALS.templates.speedrun, GOALS.unique.speedrun);

const RNG_GOALS = {};           // goals that involve rng events
assignGoals(RNG_GOALS, GOALS.templates.rng);

const POINTS_GOALS = {};        // goals that involve getting a 1P bonus
assignGoals(POINTS_GOALS, GOALS.templates.points);

const CHALLENGE_GOALS = {};     // goals that involve a custom challenge
assignGoals(CHALLENGE_GOALS, GOALS.templates.challenge, GOALS.unique.challenge);

const HARD_GOALS = {};          // goals reserved for more valuable squares
assignGoals(
    HARD_GOALS, 
    {"BEAT_VH_CHOICE": GOALS.templates.speedrun.BEAT_VH_CHOICE},
    {"STAGE_KO": GOALS.templates.rng.STAGE_KO},
    {"HEAL_3": GOALS.templates.rng.HEAL_3},
    {"MEME_KO": GOALS.templates.challenge.MEME_KO},
    {"BTT_6": GOALS.templates.challenge.BTT_6},
    {"BTP_6": GOALS.templates.challenge.BTP_6},
    {"BEAT_VH": GOALS.unique.speedrun.BEAT_VH}
);


export default {
    CHARACTERS,
    ITEMS,
    POKEMON,
    STAGE_KILLS,
    CLASSIC_LEVELS,
    MEME_MOVES,
    BONUSES,

    SPEEDRUN_GOALS,
    RNG_GOALS,
    POINTS_GOALS,
    CHALLENGE_GOALS,
    BONUS_GAME_GOALS,
    HARD_GOALS
}