// game constants

const CHARACTERS = [
    "Luigi", "Mario", "Donkey Kong", "Link", "Samus", "Captain Falcon",
    "Ness", "Yoshi", "Fox", "Kirby", "Pikachu", "Jigglypuff"
];

const REMIX_CHARACTERS = [
    "Doctor Mario", "Young Link", "Dark Samus", "Sonic", "Ganondorf",
    "Falco", "Marth", "Mewtwo", "Conker", "Wolf", "Bowser", "Lucas", "Wario"
];

// const ALT_CHARACTERS = [
//     "J Luigi", "J Donkey Kong", "J Link", "E Link", "J Samus", "E Samus",
//     "J Falcon", "J Purin", "E Jigglypuff", "J Pikachu", "E Pikachu",
//     "J Fox", "J Kirby", "J Yoshi", "J Ness"
// ];

const SPECIAL_CHARACTERS = [
    "Mad Piano", "Metal Mario", "Giant Donkey Kong", "Giga Bowser", "Super Sonic"
];

const POLYGONS = CHARACTERS.map(c => `Polygon ${c}`);

const ALL_CHARACTERS = [CHARACTERS, REMIX_CHARACTERS, SPECIAL_CHARACTERS, POLYGONS].flat();

const NO_POLYGONS = [CHARACTERS, REMIX_CHARACTERS, SPECIAL_CHARACTERS].flat();

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
        "Pokeball",
        "Super Mushroom", 
        "Poison Mushroom", 
        "Cloaking Device"
    ],
    "weapons": [
        "BeamSword", "HomeRunBat", "Fan", "StarRod", "RayGun", "FireFlower",
        "Hammer", "MotionSensorBomb", "Bob-omb", "Bumper", "GreenShell",
        "RedShell", "Pokeball"
    ],
    "healing_items": [
        "MaximTomato", "Heart", "Star", "Super Mushroom", "Poison Mushroom", "Cloaking Device"
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
];

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
    "Booby Trap",
    "Special Move",
    "Smash-less or Smash-mania",
    "Speed Demon or Speed King",
    "Star Finish",
    "Good Friend or True Friend"
];

const STAGE_KILLS = [
    "a Tornado on Hyrule",
    "the Arwing on Sector Z/Venom/Corneria(/City)",
    "the Great Fox on Corneria",
    "the Acid on Planet Zebes/Norfair",
    "a Pokemon on Saffron City",
    "the POW block on Mushroom Kingdom",
    "the Track on Mute City",
    "a Car on Onett",
    "a Canonball on Pirate Land",
    "a Bumper on Casino Night Zone"

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

const REMIX_LEVELS = [
    "Random Team",
    "Team Starfox",
    "Random Giant",
    "Remix Kirby Team",
    "Mad Piano or Super Sonic",
    "Polygon Team",
    "Giga Bowser"
];

const ALL_LEVELS = [CLASSIC_LEVELS, REMIX_LEVELS].flat();


// goal templates
const GOALS = {
    "templates": {
        "bonus_games": {
            "BTT_CHOICE": ["Beat Break the Targets w/ {}, {}, and {}", ALL_CHARACTERS], 
            "BTP_CHOICE": ["Beat Board the Platforms w/ {}, {}, and {}", ALL_CHARACTERS],
            "BTT_B_MOVE": ["Beat Break the Targets using only B moves with {}", NO_POLYGONS],
            "RTF_CHOICE": ["Beat Race to the Finish w/ {}, {}, and {}", ALL_CHARACTERS],
            "BONUS_BOTH": ["Beat Both Bonus Games w/ {}", ALL_CHARACTERS],
            "HOMERUN": ["Beat 2500 ft in Home Run Contest w/ {}", ALL_CHARACTERS]
        },
        "speedrun": {
            "BEAT_VE_CHOICE": ["Beat Very Easy (5 Stock) w/ {}, {}, and {}", ALL_CHARACTERS],
            "BEAT_N_CHOICE": ["Beat Normal (3 Stock) w/ {} and {}", ALL_CHARACTERS],
            "BEAT_VH_CHOICE": ["Beat Very Hard (1 Stock) w/ {}", ALL_CHARACTERS],
            "ALLSTAR_VE_CHOICE": ["Beat All Star Mode - Very Easy (5 Stock) w/ {}, {} and {}", ALL_CHARACTERS],
            "ALLSTAR_N_CHOICE": ["Beat All Star Mode - Normal (3 Stock) w/ {} and {}", ALL_CHARACTERS],
            "ALLSTAR_VH_CHOICE": ["Beat All Star Mode - Very Hard w/ {}", ALL_CHARACTERS],
            "BEAT_VER_CHOICE": ["Beat Remix 1P - Very Easy (5 Stock) w/ {}, {}, and {}", ALL_CHARACTERS],
            "BEAT_NR_CHOICE": ["Beat Remix 1P - Normal (3 Stock) w/ {} and {}", ALL_CHARACTERS],
            "BEAT_VHR_CHOICE": ["Beat Remix 1P - Very Hard (1 Stock) w/ {}", ALL_CHARACTERS],
        },
        "rng": {
            "WPN_KO": ["Get a KO (in 1P Game) with the {}", ITEMS['weapons']],
            "HEAL_3": ["Use 3 different {}s (in 1P Game)", ITEMS['healing_items']],
            "PKMN_CATCH": ["Catch a {} or {} (in 1P Game)", POKEMON],
            "STAGE_KO": ["Get a stage KO with {}", STAGE_KILLS],
            "BIG_CHAR": ["Make {} grow with a Super Mushroom", SPECIAL_CHARACTERS]
        },
        "points": {
            "GET_BONUS": ["Get the {} Bonus", BONUSES],
        },
        "challenge": {
            "MEME_KO": ["Defeat {} (in 1P Game) using only {}", CLASSIC_LEVELS, MEME_MOVES],
            "MEME_KO_REMIX": ["Defeat {} (in Remix 1P Game) using only {}", REMIX_LEVELS, MEME_MOVES],
            "STAR_KO": ["Get a Star KO on {}", SPECIAL_CHARACTERS]
        }
    },
    "unique": {
        "bonus_games": {
            // "BTP_SD": "SD on Board the Platforms with 12 character",
            // "BTT_SD": "SD on Break the Targets with every character",
            "BTP_6": "Complete 6 different Break the Targets stages",
            "BTT_6": "Complete 6 different Board the Platforms stages",
            "RTF_6": "Complete Race to the Finish with 6 different characters"
        },
        "speedrun": {
            "BEAT_VE": "Beat Very Easy (5 Stock)",
            "BEAT_N": "Beat Normal (3 Stock)",
            "BEAT_VH": "Beat Very Hard (1 Stock)",
            "BEAT_VE_REMIX": "Beat Remix - Very Easy (5 Stock)",
            "BEAT_N_REMIX": "Beat Remix - Normal (3 Stock)",
            "BEAT_VH_REMIX": "Beat Remix - Very Hard (1 Stock)",
            "BEAT_VH_NC_REMIX": "Beat Remix - Very Hard (1 Stock) w/ No Continues",
            "ALLSTAR_VE": "Beat All Star Mode - Very Easy (5 Stock)",
            "ALLSTAR_N": "Beat All Star Mode - Normal (3 Stock)",
            "ALLSTAR_VH": "Beat All Star Mode - Very Hard (1 Stock)",
            "ALLSTAR_NC": "Beat All Star Mode w/ No Continues",
            "ALLSTAR_NH": "Beat All Star Mode w/o using a Heart Container"
        },
        // "rng": {},       No unique RNG goals yet
        "challenge": {
            "ZEBES_SPIKE": "Spike an opponent through the acid on Planet Zebes",
            "SHIELD_BREAK": "Break an opponent's shield",
            "1V3": "Win a 1 v 3 against Level 9 CPUs",
            "STAGE_PKMN_KO": "KO a Stage Pokemon on Saffron City",
            "REFLECTOR_BREAK": "Break a Reflector",
            "200%": "Get an Opponent to 200%",
            "ALLY_KO": "KO an Ally in (1P Game)",
            "4_YOSHIS": "Get 4 Yoshis of the same color on screen",
            "CPU_TAUNT": "See a CPU Taunt",
            "3_CHEERS": "Hear 3 different crowd chants for the same character",
            "HAMMER_GRAB": "Grab someone using the hammer",
            "MULTI_10": "Get 10 KOs in Multi Man Mode",
            "MULTI_CRUEL": "Get 5 KOs in Cruel Multi Man Mode"
        }
    },
    "impossible": [
        ["MEME_KO", CLASSIC_LEVELS[10], MEME_MOVES[0]],
        ["MEME_KO", CLASSIC_LEVELS[10], MEME_MOVES[3]],
        ["STAR_KO", SPECIAL_CHARACTERS[4]],
        ["BIG_CHAR", SPECIAL_CHARACTERS[4]]
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
    ALL_CHARACTERS,
    SPECIAL_CHARACTERS,
    ITEMS,
    POKEMON,
    STAGE_KILLS,
    CLASSIC_LEVELS,
    REMIX_LEVELS,
    MEME_MOVES,
    BONUSES,

    SPEEDRUN_GOALS,
    RNG_GOALS,
    POINTS_GOALS,
    CHALLENGE_GOALS,
    BONUS_GAME_GOALS,
    HARD_GOALS
}