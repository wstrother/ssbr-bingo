<script setup>
import Board from './components/Board.vue'
</script>

<template>
  <h1>SSBR Bingo</h1>
  <div class="main">
    <Board></Board>
  </div>
</template>

<style>
@import './assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
  display: flex;
  flex-direction: column;
  align-items: center;
}

a {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }

}

.main {
  background-color: red;
  width: 100%;
  display: flex;
}
</style>
