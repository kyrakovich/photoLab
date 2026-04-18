<template>
    <div>
        <button class="52" @click="router.push('/Gallery')">Бау</button>
    </div>
</template>

<style scoped>

</style>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

</script>    