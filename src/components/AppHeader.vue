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
                        svg: '/src/assets/svg/svg-0.svg',
                        url: '#'
                    },
                    {
                        text: 'pages',
                        svg: '',
                        url: '#'
                    },
                    {
                        text: 'menu',
                        svg: '',
                        url: '#'
                    }
                ],
                rightMenu: [
                    {
                        text: 'menu',
                        svg: '',
                        url: '#'
                    },
                    {
                        text: 'event',
                        svg: '',
                        url: '#'
                    },
                    {
                        text: 'blog',
                        svg: '',
                        url: '#'
                    }
                ],
                tools: [
                    {
                        text: 'cart',
                        svg: '/src/assets/svg/svg-1.svg',
                        url: '#'
                    },
                    {
                        text: 'search',
                        svg: '',
                        url: '#'
                    }
                ],
                logo: store.logos.logoHeaderLight
            }

        }
    },
    components: { BaseButton },
    methods: {
        order() {
            alert('Ordinato!')
        }
    }
}
</script>

<template>
    <div class="bg" id="header">
        <div class="container">
            <nav class="p-4 d-flex">
                <BaseButton @button-clicked="order" :text="this.buttonText"></BaseButton>
                <div class="center-content">
                    <ul class="center-content">
                        <li v-for="element in this.navElements.leftMenu">
                            <a :href="element.url">
                                <img v-if="element.svg" :src="element.svg" class="img-fluid filtered">
                                {{ element.text }}
                            </a>
                        </li>
                    </ul>
                    <figure>
                        <img :src="this.navElements.logo" alt="Don Peppe" class="img-fluid">
                    </figure>
                    <ul class="center-content">
                        <li v-for="element in this.navElements.rightMenu">
                            <a :href="element.url">
                                <img v-if="element.svg" :src="element.svg" class="img-fluid filtered">
                                {{ element.text }}
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="tools">
                    <ul class="center-content">
                        <li v-for="element in this.navElements.tools">
                            <a :href="element.url">
                                <img v-if="element.svg" :src="element.svg" class="img-fluid filtered">
                                {{ element.text }}
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>

<style lang="scss" scoped>
div {
    text-transform: uppercase;

    color: white;

    &.bg {
        background-image: url('../assets/img/cielostellato.PNG');
        width: 100%;
        background-size: cover;
        background-position: bottom;
    }

    nav {
        justify-content: space-around;
        align-items: center;

        ul {
            list-style-type: none;
            padding: 0;
            margin: 0;

            li {
                margin: 0 10px;

                a {
                    color: white;
                    text-decoration: none;
                }
            }
        }

        .center-content {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        figure {
            width: 200px;
            height: auto;
            margin: 0 10px;
        }
    }

    .filtered {
        filter: invert(1);
        width: 25px;
        height: auto;
    }
}
</style>