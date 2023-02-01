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
    }
}
</script>

<template>
    <div class="menu-body">
        <div class="menu-info text-center p-5">
            <span class="surtitle">{{ menuContent.surtitle }}</span>
            <h2>{{ menuContent.title }}</h2>
            <p>{{ menuContent.description }}</p>
        </div>
        <div class="menu-products p-5 d-flex">
            <div v-for="product in menuContent.products" class="product-card text-center">
                <figure>
                    <img :src="product.image" :alt="product.name">
                    <div v-if="product.sold" class="text-uppercase">sold</div>
                </figure>
                <h6>{{ product.name }}</h6>
                <div v-if="!product.discountedPrice">
                    <span>{{ product.price }}</span>
                </div>
                <div v-else>
                    <span class="old-price">{{ product.price }} {{ product.discountedPrice }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/variables' as*;

.menu-body {
    height: 600px;

    .menu-info {}

    .menu-products {
        justify-content: space-between;
    }
}
</style>