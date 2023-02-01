<script>
import { store } from '../store';
export default {
    name: 'Clients',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="clients d-flex">
        <img v-for="client in store.clients" :src="client.logo" :alt="client.name">
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/variables' as*;

.clients {
    height: 300px;
    background-color: $my-off-white;

    justify-content: center;
    align-items: center;
}
</style>