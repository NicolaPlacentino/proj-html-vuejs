<script>
import { store } from '../store';
export default {
    name: 'AppFixedIcon',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div v-if="store.icons.pizza">
        <a href="#header">
            <img :src="store.icons.pizza" class="w-50">
        </a>
    </div>
</template>

<style lang="scss" scoped>
div {
    position: fixed;
    bottom: 30px;
    right: 30px;

    width: 40px;
    height: 40px;

    background-color: white;

    border-radius: 50%;

    a {
        display: flex;
        width: 100%;
        height: 100%;

        justify-content: center;
        align-items: center;
    }
}
</style>