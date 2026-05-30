<template>
    <div class="aboutus">
        <section class="center">
            <article class="row">
                <div class="image-box">
                    <img src="/photos/kart2.jpg"></img>
                </div>
                <div class="text-box">
                    <p>Создание этого сайта помогло мне улучшить навыки во фронтенд-разработке. Мне нравится это творческое направление. Программирование — это уже не только код, но и осознание. Ведь всё в жизни — это последовательность.</p>
                </div>
            </article>
            <article class="row reverse">
                <div class="image-box">
                    <img src="/photos/kart1.jpg"></img>
                </div>
                <div class="text-box">
                    <p>Сейчас самое интересное в этой сфере для меня, будет, это CSS, так как постоянно лезть в разные источники, чтобы вспомнить как сделать отступ от какой-либо стороны, либо какой параметры для тени - это надоедает и тратит много времени.</p>
                </div>
            </article>
            <article class="row">
                <div class="image-box p1">
                    <img src="/photos/kart3.jpg"></img>
                </div>
                <div class="text-box">
                    <p>Я вдохновляюсь теми, кто часами корпит над одним проектом, пробует новое и прорабатывает детали. Лучшие советы, которые я получал: «Позволь себе тупить» и  «Строй дерево планов и действуй по нему». </p>
                </div>
            </article>
        </section>
    </div>
</template>



<style scoped>
.aboutus {
    display: flex;
    justify-content: center;
    padding-top: 8vh;
    align-items: center;
    background: linear-gradient(150deg, #667eea 0%, #31aa08 100%);
    position: relative;
    overflow: hidden;
}

.center {
    width: 44%;
    height: 92vh;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(12px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.image-box {
    flex: 1;
    width: 220px;
    height: 221px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.image-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}


.text-box {
    flex: 1;
    font-size: 18px;
    line-height: 1.3;
    font-family: 'Rivervale', sans-serif;
}

.row {
    display: flex;
    align-items: center;
    gap: 30px;
    margin: 8px;
}

.reverse {
    flex-direction: row-reverse;
}
</style>