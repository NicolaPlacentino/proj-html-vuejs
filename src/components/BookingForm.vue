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
        }
    }
}
</script>

<template>
    <form class="d-flex" @submit.prevent="bookATable">
        <input type="number" placeholder="1 person">
        <span>for</span>
        <input type="date">
        <span>at</span>
        <input type="time">
        <BaseButton :text="'Book a table'" @button-clicked="SubmitEvent"></BaseButton>
    </form>
</template>

<style lang="scss" scoped>

</style>