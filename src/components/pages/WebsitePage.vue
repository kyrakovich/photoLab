<template>
    <div class="aboutus">
        <section class="center">
            <article class="row">
                <div class="image-box">
                    <img src="@/assets/photos/3смена1.jpg"></img>
                </div>
                <div class="text-box">
                    <p>Данная сайт был создан, как хранилище, а также для улучшения навыков во фронтенде. </p>
                </div>
            </article>
            <article class="row reverse">
                <div class="image-box">
                    <img src="@/assets/photos/3смена2.jpg"></img>
                </div>
                <div class="text-box">
                    <p>Это забавная фотокарточка, найденная на просторах интернета</p>
                </div>
            </article>
            <article class="row">
                <div class="image-box p1">
                    <img src="@/assets/photos/3смена3.jpg"></img>
                </div>
                <div class="text-box">
                    <p>Пока не знаю что сюда написать, но сделаем вид, что тут что-то очень интересное и полезное,
                        как-нибудь потом напишу сюда что-то</p>
                </div>
            </article>
        </section>
    </div>
</template>



<style scoped>
.aboutus {
    display: flex;
    justify-content: center;
}

.center {
    background-color: bisque;
    width: 44%;
    height: 92vh;
}

.image-box {
    flex: 1;
    width: 220px;
    height: 221px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
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
    background-color: aliceblue;
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