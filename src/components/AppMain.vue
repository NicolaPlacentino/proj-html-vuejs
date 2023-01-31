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
    <BaseCarousel></BaseCarousel>
    <div>

    </div>
    <BaseCarousel></BaseCarousel>

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