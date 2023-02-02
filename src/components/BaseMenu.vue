<script>
import { store } from '../store';
export default {
    name: 'BaseMenu',
    data() {
        return {
            store
        }
    },
    props: {
        menuContent: Object
    },
    methods: {
        sellPizza(product) {
            product.sold = true
        }
    }
}
</script>

<template>

    <div class="menu-body position-relative">
        <div class="menu-info text-center p-5 pb-0">
            <span class="surtitle">{{ menuContent.surtitle }}</span>
            <h2>{{ menuContent.title }}</h2>
            <p>{{ menuContent.description }}</p>
        </div>

        <!-- product section -->
        <div class="menu-products p-5 d-flex text-uppercase">
            <div v-for="product in menuContent.products" class="product-card text-center">
                <figure class="position-relative" @click="sellPizza(product)">
                    <img :src="product.image" :alt="product.name">
                    <div v-if="product.sold" class="sold">sold</div>
                </figure>
                <h6>{{ product.name }}</h6>
                <div v-if="!product.discountedPrice">
                    <span>{{ product.price }}</span>
                </div>
                <div v-else>
                    <span class="old-price">{{ product.price }}</span>
                    <span>{{ product.discountedPrice }}</span>
                </div>
            </div>
        </div>
        <div v-if="store.icons.swirl" class="icon position-absolute">
            <img :src="store.icons.swirl" class="w-75">
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/variables' as*;

.menu-body {
    padding-bottom: 30px;

    .menu-info {
        .surtitle {
            text-transform: uppercase;
            font-weight: bold;
            font-size: 12px;
            color: $my-orange;
        }

        h2 {
            text-transform: uppercase;
        }

        p {
            color: gray;
            font-size: 15px;
            font-family: sans-serif;
        }
    }

    .menu-products {
        justify-content: space-between;

        .product-card {
            width: 180px;

            figure {
                width: 100%;

                img {
                    width: 100%;
                    height: auto;
                }

                .sold {
                    position: absolute;
                    top: 0;
                    right: 0;

                    width: 45px;
                    height: 45px;
                    background-color: $my-orange;
                    border-radius: 50%;

                    color: white;
                    font-size: 12px;
                    font-weight: bold;

                    text-align: center;
                    line-height: 45px;
                }
            }

            h6 {
                color: $my-gold-l;
            }

            span {
                color: $my-orange;
                font-weight: bold;

                &.old-price {
                    display: inline-block;
                    margin-right: 5px;

                    color: $my-faint-beige;
                    text-decoration: line-through;
                }
            }
        }
    }

    .icon {
        bottom: 0;
        right: 0;

        background-color: $my-magenta;
        width: 30px;
        height: 30px;

        border-radius: 5px 0 0 0;

        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>