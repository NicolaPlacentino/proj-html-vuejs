<script>
import { store } from '../store';
import BookingForm from './BookingForm.vue';
import BaseCarousel from './BaseCarousel.vue';
import BaseInfoSection from './BaseInfoSection.vue';
import BasePictureGallery from './BasePictureGallery.vue';
import Clients from './Clients.vue';
import BaseMenu from './BaseMenu.vue';
export default {
    name: 'AppMain',
    data() {
        return {
            store,
            specialSection: {
                title: 'Specials*',
                subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
                listItems: [
                    {
                        name: 'Combo piccolo',
                        subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
                        price: '$10'
                    },
                    {
                        name: 'Combo mezzo',
                        subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
                        price: '$20'
                    },
                    {
                        name: 'Combo grande',
                        subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
                        price: '$30'
                    }
                ]
            },
            dealSection: {
                title: 'Delish pizza deals',
                surTitle: 'Made with love',
                listItems: [
                    {
                        name: 'Traditional Neapolitan pies in Kyoto pizza mercato',
                        subTitle: '204 E. Pizzetta Tommaso',
                        date: ['02', 'Nov']
                    },
                    {
                        name: 'Terrazza Patio dining space opening this weekend',
                        subTitle: '204 E. Pizzetta Tommaso',
                        date: ['03', 'Nov']
                    },
                    {
                        name: 'Sienna private dining room with St??phane Brunn',
                        subTitle: '204 E. Pizzetta Tommaso',
                        date: ['05', 'Nov']
                    }
                ]
            },
            buildYourPizzaText: "Go ahead and build your own pizza we won't judge!",
            buildYourPizzaBg: '/src/assets/img/h3-background-img.jpg'
        }
    },
    components: { BaseCarousel, BookingForm, BaseInfoSection, BasePictureGallery, Clients, BaseMenu }
}
</script>

<template>
    <BaseCarousel :background-pattern="true" :carousel-content="store.carouselPizzas"></BaseCarousel>

    <BasePictureGallery :content="store.stock"></BasePictureGallery>

    <BaseCarousel :background-pattern="false" :carousel-content="store.carouselTestimonials"></BaseCarousel>

    <!-- specials section -->
    <BaseInfoSection :main-content="this.specialSection" :img-side="'left'" :has-logo="true"
        :bg-img="store.sideImages.specialsImage" :logo-img="store.logos.specialsLogo"></BaseInfoSection>

    <div class="build-your-pizza position-relative">
        <figure v-for="n in 3" class="w-100">
            <img :src="this.buildYourPizzaBg" alt="bg" class="img-fluid">
        </figure>
        <div class="position-absolute">
            <p>
                {{ this.buildYourPizzaText }}
            </p>
        </div>
    </div>

    <!-- team members section -->
    <BasePictureGallery :content="store.teamMembers" :has-hover-info="true" :social="true">
    </BasePictureGallery>

    <Clients></Clients>

    <BaseMenu :menu-content="store.menu"></BaseMenu>

    <!-- deals section -->
    <BaseInfoSection :main-content="this.dealSection" :img-side="'right'" :bg-img="store.sideImages.dealsImage"
        :has-pattern="true" :has-separator="true" :has-icon="true"></BaseInfoSection>

    <BookingForm></BookingForm>
</template>

<style lang="scss" scoped>
@use '../assets/scss/variables' as *;

.build-your-pizza {
    height: 500px;
    overflow-y: hidden;

    figure {

        margin: 0;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        &:first-child {
            height: 27.5%;

            img {
                object-position: bottom;
            }
        }

        &:nth-child(2) {
            height: 45%;

            img {
                object-position: 0 -60px;
            }
        }

        &:nth-child(3) {
            height: 27.5%;

            img {
                object-position: center;
            }
        }
    }

    .position-absolute {
        top: 50%;
        left: 30%;
        transform: translate(-50%, -50%);

        height: 300px;
        width: 350px;

        color: white;

        p {
            font-size: 50px;
            font-weight: bold;

            margin: 0;
        }
    }
}
</style>