<script>
import { store } from '../store';
import OrderingForm from './OrderingForm.vue';
import BaseCarousel from './BaseCarousel.vue';
import BaseInfoSection from './BaseInfoSection.vue';
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
                        name: 'Sienna private dining room with Stéphane Brunn',
                        subTitle: '204 E. Pizzetta Tommaso',
                        date: ['05', 'Nov']
                    }
                ]
            },
        }
    },
    components: { BaseCarousel, OrderingForm, BaseInfoSection }
}
</script>

<template>
    <BaseCarousel :background-pattern="true" :carousel-content="store.carouselPizzas"></BaseCarousel>
    <div class="d-flex">
        <figure v-for="img in store.topImages" class="w-25 px-1 py-2">
            <img :src="img" :alt="'stock image'" class="img-fluid">
        </figure>
    </div>
    <BaseCarousel :background-pattern="false" :carousel-content="store.carouselTestimonials"></BaseCarousel>

    <!-- specials section -->
    <BaseInfoSection :main-content="this.specialSection" :img-side="'left'" :has-logo="true"
        :bg-img="store.sideImages.specialsImage" :logo-img="store.logos.specialsLogo"></BaseInfoSection>

    <div>

    </div>
    <section class="menu">

    </section>

    <!-- deals section -->
    <BaseInfoSection :main-content="this.dealSection" :img-side="'right'" :bg-img="store.sideImages.dealsImage"
        :has-pattern="true" :has-separator="true"></BaseInfoSection>

    <OrderingForm></OrderingForm>
</template>

<style lang="scss" scoped>

</style>