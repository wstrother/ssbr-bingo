<template>
    <button @click="getKSets">
        Get K Sets
    </button>
    <div class="board">
        <div 
            v-for="square in board.SQUARES" 
            :class="getSquareColor(square)"
            :key="square"
            ref="squareRefs"
            :data="square"
            @mouseenter="hoverSquare($event, square)"
            @mouseleave="hoverSquare($event, square)">
            <div class="square-label">
                {{ square }}
            </div>
            <div class="square-inner"></div>
        </div>
    </div>
    <div>{{ kHighlighted }}</div>
</template>

<style>
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
        border:1px solid black;
        align-content: center;
        justify-content: center;
        align-items: center;
        background-color: gray;
    }
    .square-inner {
        width: 100%;
        height: 100%;
        position: absolute;
        opacity: .25;
    }
    .square-label {
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
        opacity: 0.9;
    }
    .highlighted>.square-inner {
        opacity: 0.8;
    }
    .k0>.square-inner {background-color: hsl(360, 50%, 75%);}
    .k1>.square-inner {background-color: hsl(40, 50%, 75%);}
    .k2>.square-inner {background-color: hsl(80, 50%, 75%);}
    .k3>.square-inner {background-color: hsl(120, 50%, 75%);}
    .k3>.square-inner {background-color: hsl(160, 50%, 75%);}
    .k4>.square-inner {background-color: hsl(200, 50%, 75%);}
    .k5>.square-inner {background-color: hsl(240, 50%, 75%);}
    .k6>.square-inner {background-color: hsl(280, 50%, 75%);}
    .k7>.square-inner {background-color: hsl(320, 50%, 75%);}
</style>

<script>
import goals from '../assets/js/goals';
import { Board} from '../assets/js/board';

export default {
    name: 'Board',
    data: () => {return {
        goalsDict: goals,
        board: new Board(),
        hovered: null,
        k_sets: []
    }},
    methods: {
        hoverSquare(event, square) {
            if (event.type == "mouseenter") {
                this.hovered = square;
            } else {
                this.hovered = null;
            }
        },
        getSquareRef(square) {
            return this.$refs.squareRefs.filter(ref => ref.attributes.data.value == square)[0];
        },
        getKSets() {
            this.k_sets = this.board.getKSets();
            console.log(this.k_sets);
        },
        getKColor(square, style) {
            let i = 0;
            this.k_sets.forEach(k_set => {
                style[`k${i}`] = k_set.includes(square);
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
        }
    }, 
    computed: {
        highlighted() {
            return this.hovered ? this.board.getBingos(this.hovered).flat() : [];
        },
        kHighlighted() {
            console.log('computing kHighlighted');
            let out = (this.k_sets.length && this.hovered) ? this.k_sets.filter(k_set => k_set.includes(this.hovered))[0] : [];
            console.log(`OUT: ${out}`);
            if (out === undefined) {
                debugger;
            }
            return out;
        }
    },
    mounted() {
        console.log(this.goalsDict);
        console.log(this.board);
    }
};
</script>