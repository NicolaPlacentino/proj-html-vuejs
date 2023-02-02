<script>
import { store } from '../store';
import BaseButton from './BaseButton.vue';
export default {
    name: 'OrderingForm',
    data() {
        return {
            store,
        }
    },
    components: { BaseButton },
    methods: {
        bookATable() {
            alert('Prenotato!')
        },
    }
}
</script>

<template>
    <form class="d-flex" @submit.prevent="bookATable" id="form">
        <input type="number" placeholder="1 person" v-model="store.userBooking.guestsNumber">
        <span>for</span>
        <input type="date" v-model="store.userBooking.bookedDate">
        <span>at</span>
        <input type="time" v-model="store.userBooking.bookedTime">
        <BaseButton :text="'Book a table'" @button-clicked=""></BaseButton>
    </form>
</template>

<style lang="scss" scoped>

</style>