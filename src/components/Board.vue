<template>
    <div class="button-panel">
        <!-- <button @click="getKSets">
            Get K Sets
        </button> -->

        <button @click="setGoals">
            Set Goals
        </button>
    </div>

    <!-- <div class="board">
        <div 
            v-for="square in board.SQUARES" 
            :class="getSquareColor(square)"
            :key="square"
            :data="square"
            @click="selectK(square)"
            @mouseenter="hoverSquare($event, square)"
            @mouseleave="hoverSquare($event, square)">
            <div class="square-label">
                <span>
                    {{ square }}
                </span>
                <span>
                    {{ board.getValue(square)}}
                </span>
                <span>{{ goals[square] }}</span>
            </div>
            <div class="square-inner"></div>
        </div>
    </div>

    <div class="k-set-div" v-if="kSets.length">
        <div v-for="kSet in kSets" class="k-set-inner">
            <div class="k-set-label">
                {{ board.getKValue(kSet) }}
            </div>

            <div :class="getKDivColor(square)" v-for="square in kSet">
                <div class="square-label">
                        <span>
                            {{ square }}
                        </span>
                        <span>
                            {{ board.getValue(square) }}
                        </span>
                    </div>
                    <div class="square-inner"></div>
                </div>
            </div>
    </div> -->
    <textarea class="output">{{ goalJson }}</textarea>

    <!-- <div>{{ currentK }}</div> -->
</template>

<style>
    .output {
        margin: 10px;
        width: 500px;
        height: 300px;
    }

    .k-set-div {
        display: flex;
        flex-direction: column;
        /* width: 100%; */
    }
    .k-set-inner {
        display: flex;
        width: 100%;
        margin: 2px;
    }
    .k-square-label {
        background-color: purple;
    }
    .k-square {
        display: flex;
        width: 50px;
        height: 50px;
    }

    .board {
        display: grid;
        margin: 1rem;
        grid-template-columns: repeat(5, 1fr);
        width:550px;
        height:550px;
        border:1px solid black;
    }

    .square {
        color:white;
        display:flex;
        align-content: center;
        justify-content: center;
        align-items: center;
        background-color: gray;
        max-width: auto;
        max-height: auto;
    }
    .square-inner {
        width: 100%;
        height: 100%;
        position: absolute;
        opacity: 1;
        border:1px solid black;
    }
    .square-label {
        width: 50%;
        height: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 2;
        opacity: 1 !important;
    }
    .hover,.highlighted {
        background-color: lightgray;
    }
    .hover>.square-label {
        font-weight: bold;
        background-color: rgba(0, 0, 0, .5);
        border-radius: 10%;
    }
    .hover>.square-inner {
        opacity: 0.5;
    }
    .highlighted>.square-inner {
        opacity: 0.25 !important;
    }
    .k0>.square-inner {
        background-color: hsl(360, 50%, 75%);
        border: 1px solid hsl(360, 90%, 20%);
        box-sizing: border-box;
        /* border-color:hsl(360, 90%, 100%); */
    }
    .k1>.square-inner {
        background-color: hsl(40, 50%, 75%);
        border: 1px solid hsl(40, 90%, 20%);;
        box-sizing: border-box;
        /* border-color:hsl(40, 90%, 100%); */
    }
    .k2>.square-inner {
        background-color: hsl(80, 50%, 75%);
        border: 1px solid hsl(80, 90%, 20%);;
        box-sizing: border-box;
        /* border-color:hsl(80, 90%, 100%); */
    }
    .k3>.square-inner {
        background-color: hsl(120, 50%, 75%);
        border: 1px solid hsl(120, 90%, 20%);
        box-sizing: border-box;
        /* border-color:hsl(120, 90%, 100%); */
    }
    .k3>.square-inner {
        background-color: hsl(160, 50%, 75%);
        border: 1px solid hsl(160, 90%, 20%);
        box-sizing: border-box;
        /* border-color:hsl(160, 90%, 100%); */
    }
    .k4>.square-inner {
        background-color: hsl(200, 50%, 75%);
        border: 1px solid hsl(200, 90%, 20%);
        box-sizing: border-box;
        /* border-color:hsl(200, 90%, 100%); */
    }
    .k5>.square-inner {
        background-color: hsl(240, 50%, 75%);
        border: 1px solid hsl(240, 90%, 20%);
        box-sizing: border-box;
        /* border-color:hsl(240, 90%, 100%); */
    }
    .k6>.square-inner {
        background-color: hsl(280, 50%, 75%);
        border: 1px solid hsl(280, 90%, 20%);
        box-sizing: border-box;
        /* border-color:hsl(280, 90%, 100%); */
    }
    .k7>.square-inner {
        background-color: hsl(320, 50%, 75%);
        border: 1px solid hsl(320, 90%, 20%);
        box-sizing: border-box;
        /* border-color:hsl(320, 90%, 100%); */
    }
</style>

<script>
// import goals from '../assets/js/goals';
import { GoalGenerator } from '../assets/js/make';
import { Board } from '../assets/js/board';

const BOARD = new Board();
const GG = new GoalGenerator();

export default {
    name: 'Board',
    data: () => {return {
        // goalsDict: goals,
        board: BOARD,
        generator: GG,
        hovered: null,
        kSets: [],
        currentK: [],
        goals: {},
        goalJson: ''
    }},
    methods: {
        hoverSquare(event, square) {
            if (event.type == "mouseenter") {
                this.hovered = square;
            } else {
                this.hovered = null;
            }
        },
        getKSets() {
            let kSets = this.board.getKSets();
            this.kSets = kSets;
        },
        getKColor(square, style) {
            let i = 0;
            this.kSets.forEach(kSet => {
                style[`k${i}`] = kSet.includes(square);
                i++;
            });
            return style;
        },
        getSquareColor(square) {
            let style = {
                square: true,
                hover: (square === this.hovered || this.kHighlighted.includes(square)),
                highlighted: this.highlighted.includes(square)
            }
            style = this.getKColor(square, style);

            return style;
        },
        getKDivColor(square) {
            let style = {
                "square": true,
                "k-square": true,
                "highlighted": this.currentK.includes(square)
            }
            style = this.getKColor(square, style);
            return style;
        },
        selectK(square) {
            if (this.kSets.length) {
                this.currentK = this.kSets.filter(kSet => kSet.includes(square))[0];
            }
        },
        setGoals() {
            if (!this.kSets.length) {
                this.getKSets();
            }

            let kSets = JSON.parse(JSON.stringify(this.kSets));
            this.goals = GG.getGoals(kSets, BOARD);
            this.getGoalJSON();
        },
        getGoalJSON() {
            let goals = [];
            // Object.values(this.goals).forEach(text => {
            //     goals.push({"name": text})
            // });
            this.board.SQUARES.forEach(square => {
                goals.push({
                    "name": this.goals[square]
                });
            });

            // console.log(JSON.stringify(goals));
            this.goalJson = JSON.stringify(goals);
        }
    }, 
    computed: {
        highlighted() {
            return this.hovered ? this.board.getBingos(this.hovered).flat() : [];
        },
        kHighlighted() {
            return (this.kSets.length && this.hovered) ? this.kSets.filter(kSet => kSet.includes(this.hovered))[0] : [];
        }
    }
    // mounted() {
    //     console.log(this.goalsDict);
    //     console.log(this.board);
    // }
};
</script>