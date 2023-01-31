<script>
import { store } from '../store';
export default {
    name: 'BaseCarousel',
    data() {
        return {
            store,
            currentActiveindex: 0,
        }
    },
    props: {
        backgroundPattern: Boolean,
        carouselContent: Array
    },
    methods: {
        changeindex(target) {
            if (target === 'prev') {
                this.currentActiveindex--
                if (this.currentActiveindex < 0) { this.currentActiveindex = this.carouselContent.length - 1 }
            }
            if (target === 'next') {
                this.currentActiveindex++
                if (this.currentActiveindex === this.carouselContent.length) { this.currentActiveindex = 0 }
            }
        }
    }
}
</script>

<template>
    <div class="carousel-section position-relative">
        <div class="prev">
            <button @click="this.changeindex('prev')" class="prev-btn">Prev</button>
        </div>
        <div class="carousel" :class="{ 'bg-pattern': backgroundPattern }">
            <div v-for="(content, i) in carouselContent" :class="{ 'd-none': this.currentActiveindex !== i }"
                class="carousel-element position-relative">

                <img :src="content.backgroundImg" class="bg-img" :class="!content.testimonial ? 'small' : 'big'">

                <div v-if="content.mainImg" class="h-100">
                    <img :src="content.mainImg" class="main-img">
                </div>

                <div v-else class="text-center text-uppercase">
                    <font-awesome-icon icon="fa-solid fa-quote-left" />
                    <p>{{ content.text }}</p>
                    <span>{{ content.testimonial }}</span>
                </div>
            </div>
        </div>
        <div class="next">
            <button @click="this.changeindex('next')" class="next-btn">Next</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/variables' as*;

.carousel-section {
    height: 500px;
    background-color: gray;

    overflow-x: hidden;

    .prev,
    .next {
        position: absolute;
        top: 35%;

        z-index: 1;

        .prev-btn,
        .next-btn {
            border: 0;
            background-color: white;
            color: $my-orange;

            padding: 10px 40px;
            padding-bottom: 50px;
            transform: translatey(75%);

            text-transform: uppercase;

            border-radius: 100%;
        }

        &.prev {
            left: 0;
            transform: rotate(90deg);
        }

        &.next {
            right: 0;
            transform: rotate(-90deg);
        }
    }

    .carousel {
        height: 100%;
        background-color: $my-off-white;

        &.bg-pattern {
            background-color: transparent;
            background-image: url('../assets/img/cielostellato.PNG');
            background-size: cover;
            background-position: bottom;
        }

        .carousel-element {
            height: 100%;

            .text-center {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);

                .fa-quote-left {
                    font-size: 70px;
                    color: $my-gold-l;

                    margin-bottom: 10px;
                }

                p {
                    font-size: 25px;
                    color: $my-black;
                    font-weight: 500;
                }

                span {
                    color: $my-orange;
                    font-weight: bold;
                    font-size: 14px;
                }
            }

        }

        .bg-img {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            height: auto;

            &.small {
                width: 45%;
            }

            &.big {
                width: 100%;
                object-position: center;
                object-fit: cover;
            }
        }

        .main-img {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            height: 85%;
            width: auto;
        }
    }
}
</style>