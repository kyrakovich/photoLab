<template>
    <div class="face">
        <div class="content">
            <h1 class="error">ERROR</h1>
            <h1 class="error">404</h1>
            <button class="reset-btn" @click="goToGallery">
                Перезагрузка
            </button>
        </div>
    </div>
</template>

<style scoped>
.face {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #667eea 0%, #110f13 100%);
    position: relative;
    overflow: hidden;
}

.content {
    text-align: center;
    z-index: 1;
    animation: fadeInUp 0.8s ease-out;
}

.error {
    font-size: 80px;
    font-weight: 800;
    color: white;
    text-shadow: 4px 4px 20px rgba(0, 0, 0, 0.3);
    line-height: 1;
    font-family: 'Rivervale', sans-serif;
}

.error-text {
    font-size: 36px;
    color: white;
    margin: 20px 0;
    font-family: 'Rivervale', sans-serif;
    letter-spacing: 2px;
}

.error-description {
    font-size: 18px;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 40px;
    font-family: Arial, sans-serif;
}

.reset-btn {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.3);
    padding: 12px 32px;
    font-size: 18px;
    font-family: 'Rivervale', sans-serif;
    color: white;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    letter-spacing: 1px;
}

.reset-btn:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.reset-btn:active {
    transform: translateY(0);
}

</style>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goToGallery = () => {
  router.push('/Gallery')
}

</script>