<script>
import { store } from '../store';
export default {
    name: 'BasePictureGallery',
    data() {
        return {
            store
        }
    },
    props: {
        content: Array,
        hasHoverInfo: Boolean,
        social: Boolean
    }
}
</script>

<template>
    <div class="d-flex">
        <figure v-for="item in content" class="w-25 my-2 position-relative"
            :class="{ 'px-1': !hasHoverInfo }, { 'has-info': hasHoverInfo }">
            <img :src="item.image" :alt="'stock image'" class="img-fluid">
            <div class="hover-plain position-absolute" v-if="!hasHoverInfo">
                <div>
                    <div class="eye-icon">
                        <font-awesome-icon icon="fa-regular fa-eye" />
                    </div>
                </div>
            </div>
            <div class="hover-info position-absolute" v-else>
                <div>
                    <div class="info d-flex">
                        <h3>{{ item.mainInfo }}</h3>
                        <span>{{ item.secondaryInfo }}</span>
                        <div v-if="social" class="d-flex social">
                            <a href="#">
                                <font-awesome-icon icon="fa-brands fa-instagram" />
                            </a>
                            <a href="#">
                                <font-awesome-icon icon="fa-brands fa-twitter" />
                            </a>
                            <a href="#">
                                <font-awesome-icon icon="fa-brands fa-facebook-f" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </figure>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/variables' as*;

figure:hover .hover-plain,
figure:hover .hover-info {
    visibility: visible;
}

.hover-plain,
.hover-info {
    background-color: whitesmoke;
    opacity: 1;
    background-image: radial-gradient(gray 0.5px, transparent 0.5px), radial-gradient(gray 0.5px, whitesmoke 0.5px);
    background-size: 20px 20px;
    background-position: 0 0, 10px 10px;

    visibility: hidden;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    div {
        height: 100%;
        width: 100%;
        position: relative;

        .eye-icon,
        .info {
            background-color: $my-orange;

            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            color: white;

            a {
                color: white;
                text-decoration: none;
            }
        }
    }
}

.hover-plain {
    .eye-icon {
        width: 80px;
        height: 80px;
        border-radius: 50%;

        text-align: center;
        line-height: 80px;
        font-size: 25px;
    }
}

.hover-info {
    .info {
        width: 88%;
        height: 88%;

        flex-direction: column;
        justify-content: center;
        align-items: center;

        span {
            font-family: sans-serif;
        }

        .social {
            justify-content: center;
            align-items: center;
            height: 50px;

            * {
                margin: 15px 10px;
                font-size: 18px
            }
        }
    }
}
</style>