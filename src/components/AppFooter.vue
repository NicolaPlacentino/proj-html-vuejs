<script>
import { store } from '../store';
export default {
    name: 'AppFooter',
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <section class="d-flex">
        <div class="w-50 bg-pattern p-5">
            <div class="top d-flex">
                <div class="restaurants">
                    <h4>{{ store.footerData.restaurants.title }}</h4>
                    <ul v-for="list in store.footerData.restaurants.info">
                        <li v-for="attribute in list">
                            {{ attribute }}
                        </li>
                    </ul>
                </div>
                <div class="working-hours">
                    <h4>{{ store.footerData.workingHours.title }}</h4>
                    <ul v-for="list in store.footerData.workingHours.info">
                        <h5>{{ list.day }}</h5>
                        <li :class="{ 'closed': list.closed }">
                            {{ list.hours }}
                        </li>
                    </ul>
                </div>
                <div class="slogan">
                    <h3 class="text-white">
                        {{ store.footerData.slogan }}
                    </h3>
                </div>
            </div>
            <div class="social d-flex">
                <span>Follow Us:</span>
                <a href="#">
                    <font-awesome-icon icon="fa-brands fa-twitter" />
                </a>
                <a href="#">
                    <font-awesome-icon icon="fa-brands fa-facebook-f" />
                </a>
                <a href="#">
                    <font-awesome-icon icon="fa-brands fa-instagram" />
                </a>
                <a href="#">
                    <font-awesome-icon icon="fa-brands fa-linkedin-in" />
                </a>
            </div>
            <div class="bottom d-flex">
                <div>Made with <font-awesome-icon icon="fa-regular fa-heart" /> by <span>Nicola</span></div>
                <figure class="m-0">
                    <img :src="store.footerData.sealOfQuality" :alt="store.footerData.sealOfQuality">
                </figure>
            </div>
        </div>
        <div class="w-50">
            <img :src="store.footerData.footerImage" :alt="store.footerData.footerImage" class="bg-img">
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
        height: auto;
        object-fit: cover;
        object-position: bottom;
    }

    .bg-pattern {
        background-image: url('../assets/img/cielostellato.png');
        background-size: cover;

        color: gray;
    }

    .top {
        justify-content: space-between;

        .slogan {
            width: 180px;

            text-transform: uppercase;

            h3 {
                font-size: 20px;
            }
        }
    }

    .social {
        justify-content: center;
        align-items: center;
        color: white;

        font-size: 14px;

        span {
            text-transform: uppercase;
            color: $my-gold-l;
            font-weight: bold;
        }

        a {
            color: white;
            text-decoration: none;
        }

        * {
            margin: 0 5px;
        }
    }

    .bottom {
        height: 200px;

        font-size: 14px;
        color: $my-gold-l;

        justify-content: space-between;
        align-items: flex-end;

        span {
            color: $my-green;
        }
    }

    h4,
    h5 {
        color: $my-gold-l;

    }

    h4 {
        font-size: 18px;
    }

    h5 {
        font-size: 16px;
    }

    ul {
        list-style-type: none;
        padding: 0;
        font-size: 13px;
    }

    .closed {
        color: $my-orange;
    }
}
</style>