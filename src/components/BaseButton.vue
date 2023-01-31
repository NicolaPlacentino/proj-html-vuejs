<script>
export default {
    name: 'BaseButton',
    data() {
        return {
        }
    },
    props: {
        text: String
    }
}
</script>

<template>
    <button>{{ text }}</button>
</template>

<style lang="scss" scoped>
@use '../assets/scss/variables' as *;

button {
    font-size: 20px;
    color: white;
    background-color: $my-orange;

    padding: 10px 15px;

    border: 0;

    text-transform: uppercase;
}
</style>