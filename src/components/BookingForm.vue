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
    <div class="bg my-2">
        <div class="container">
            <form class="d-flex" @submit.prevent="bookATable">
                <input type="number" placeholder="1 person" v-model="store.userBooking.guestsNumber">
                <span>for</span>
                <input type="date" v-model="store.userBooking.bookedDate">
                <span>at</span>
                <input type="time" v-model="store.userBooking.bookedTime">
                <BaseButton :text="'Book a table'" @button-clicked=""></BaseButton>
            </form>
            <span>*Powered by OpenTable</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/variables' as *;

.bg {
    background-image: url('../assets/img/h3-background-img-3.jpg');
    background-size: cover;
    background-position: center;

    padding: 60px;

    .container {
        max-width: 900px;
    }

    form {
        justify-content: space-between;

        span {
            align-self: center;
            text-transform: uppercase;
            color: white;
            font-size: 18px;
            font-weight: bold;
        }

        input {
            padding: 10px;
            border: 1.5px solid black;
        }
    }

    span {
        color: white;
        font-size: 12px;
    }
}
</style>