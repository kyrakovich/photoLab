<template>
  <div>

    <header>

      <div class="card">
        <div class="text cursor" @click="router.push('/')">Галерея</div>
      </div>
      <div class="card">
        <div class="text cursor" @click="GoToWaterfallPage">Водопад</div>
      </div>
      <div class="card">
        <div class="text cursor">3</div>
      </div>
    </header>
  </div>

  <main>
    <router-view />
  </main>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

function GoToWaterfallPage() {
  router.push('/Waterfall')
}
</script>

<style>
/* Глобальные стили */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

@font-face {
  font-family: 'Rivervale';
  src: url(@/assets/fonts/RivervaleDemo.otf) format('opentype');
}

.cursor {
  cursor: pointer;
}

header {
  width: 100%;
  height: 8vh;
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: sticky;
}

.text {
  font-family: Rivervale, sans-serif;
  font-size: 32px;
  font-weight: 700;
}

.card {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: aquamarine;
  width: 400px;
  height: 5vh;
  border-radius: 10px;
}
</style>