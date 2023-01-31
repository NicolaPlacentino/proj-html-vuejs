<script>
import { store } from '../store';
import OrderingForm from './OrderingForm.vue';
import BaseCarousel from './BaseCarousel.vue';
export default {
    name: 'AppMain',
    data() {
        return {
            store,
        }
    },
    components: { BaseCarousel, OrderingForm }
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

    <section class="specials">

    </section>
    <div>

    </div>
    <section class="menu">

    </section>
    <section class="deals">

    </section>
    <OrderingForm></OrderingForm>
</template>

<style lang="scss" scoped>

</style>