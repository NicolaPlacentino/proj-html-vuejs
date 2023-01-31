<script>
import BaseButton from './BaseButton.vue';
import { store } from '../store';
export default {
    name: 'AppHeader',
    data() {
        return {
            store,
            buttonText: 'Order online',
            navElements: {
                leftMenu: [
                    {
                        text: 'home',
                        svg: '/src/assets/svg/svg-0.svg'
                    },
                    {
                        text: 'pages',
                        svg: ''
                    },
                    {
                        text: 'menu',
                        svg: ''
                    }
                ],
                rightMenu: [
                    {
                        text: 'menu',
                        svg: ''
                    },
                    {
                        text: 'event',
                        svg: ''
                    },
                    {
                        text: 'blog',
                        svg: ''
                    }
                ],
                tools: [
                    {
                        text: 'cart',
                        svg: '/src/assets/svg/svg-1.svg'
                    },
                    {
                        text: 'search',
                        svg: ''
                    }
                ],
                logo: '/src/assets/img/h5-logo-divided-header.png'
            }

        }
    },
    components: { BaseButton },

}
</script>

<template>
    <div class="bg">
        <div class="container">
            <nav class="p-3 d-flex">
                <BaseButton :text="this.buttonText"></BaseButton>
                <div class="center-nav">
                    <ul>
                        <li v-for="element in this.navElements.leftMenu">
                            <img v-if="element.svg" :src="element.svg" class="img-fluid filtered">
                            {{ element.text }}
                        </li>
                    </ul>
                    <figure>
                        <img :src="this.navElements.logo" alt="Don Peppe" class="img-fluid">
                    </figure>
                    <ul>
                        <li v-for="element in this.navElements.rightMenu">
                            <img v-if="element.svg" :src="element.svg" class="img-fluid">
                            {{ element.text }}
                        </li>
                    </ul>
                </div>
                <div class="tools">
                    <ul>
                        <li v-for="element in this.navElements.tools">
                            <img v-if="element.svg" :src="element.svg" class="img-fluid filtered">
                            {{ element.text }}
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>