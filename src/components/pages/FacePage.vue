<template>
    <div class="c52">
        <button class="c53" @click="router.push('/Gallery')">Буу</button>
    </div>
</template>

<style scoped>
.c52 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.c53 {
    width: 100px;
    aspect-ratio: 1.618/1;
    font-family: Rivervale, sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 8%;
    transition: transform 1s ease-in-out, background-color 1s ease-in-out;
    font-size: 20px;
}

.c53:hover {
    background-color: rgb(238, 0, 0);
    transform: scale(5);
}
</style>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

</script>