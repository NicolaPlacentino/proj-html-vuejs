<script>
import { store } from '../store';
export default {
    name: 'BaseInfoSetion',
    data() {
        return {
            store,
        }
    },
    props: {
        imgSide: String,
        bgImg: String,
        hasLogo: Boolean,
        logoImg: String,
        hasPattern: Boolean,
        hasSeparator: Boolean,
        mainContent: Object,
    }
}
</script>

<template>
    <section class="d-flex">
        <div v-if="imgSide === 'left'" class="w-50 position-relative">
            <img :src="bgImg" :alt="bgImg" class="bg-img img-fluid">
            <figure v-if="hasLogo" class="position-absolute m-0">
                <img :src="logoImg" alt="Don Peppe" class="img-fluid">
            </figure>
        </div>
        <div class="w-50" :class="{ 'bg-pattern': hasPattern }">
            <div class="w-75 mx-auto mt-5">
                <span v-if="mainContent.surTitle" class="text-uppercase surtitle color-orange">{{
                    mainContent.surTitle
                }}</span>
                <h2 class="text-uppercase">{{ mainContent.title }}</h2>
                <span v-if="mainContent.subTitle" class="subtitle">{{ mainContent.subTitle }}</span>

                <div v-for="listItem in mainContent.listItems">
                    <div v-if="hasSeparator" class="separator"></div>
                    <div class="d-flex">
                        <div class="me-4">
                            <div v-if="listItem.date" class="d-inline text-uppercase">
                                <span class="d-block day color-orange">{{ listItem.date[0] }}</span>
                                <span class="d-block month">{{ listItem.date[1] }}</span>
                            </div>
                            <span v-else class="price">{{ listItem.price }}</span>
                        </div>
                        <div>
                            <h3 class="text-uppercase">{{ listItem.name }}</h3>
                            <p class="color-orange">
                                <span v-if="mainContent.surTitle">
                                    <font-awesome-icon icon="fa-solid fa-location-dot" />
                                </span>
                                {{ listItem.subTitle }}
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div v-if="imgSide === 'right'" class="w-50">
            <img :src="bgImg" :alt="bgImg" class="bg-img">
            <figure v-if="hasLogo">
                <img :src="logoImg" alt="Don Peppe" class="img-fluid">
            </figure>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/variables' as *;

section {
    height: 650px;
    overflow-y: hidden;

    .bg-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    .position-absolute {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: 40%;
        height: auto;
    }

    h3 {
        font-size: 25px;
    }

    p {
        color: gray;
        font-size: 14px;
    }

    .subtitle {
        display: inline-block;
        color: gray;
        font-size: 15px;
        margin-bottom: 20px;
    }

    .price {
        font-size: 25px;
        font-weight: bold;
        color: $my-orange;
    }

    .bg-pattern {
        background-image: url('../assets/img/cielostellato.png');
        background-size: cover;

        color: white;

        .day {
            font-size: 40px;
            font-weight: bold;
            line-height: 40px;
        }

        .month {
            font-size: 20px;
            font-weight: bold;
        }

        .color-orange {
            color: $my-orange;
        }

        .surtitle {
            font-weight: bold;
        }
    }

    .separator {
        border-bottom: 2px dotted $my-gold-l;

        margin: 20px 0;
    }
}
</style>