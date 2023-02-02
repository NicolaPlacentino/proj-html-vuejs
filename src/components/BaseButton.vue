<script>
export default {
    name: 'BaseButton',
    data() {
        return {
        }
    },
    props: {
        text: String
    },
    emits: ['button-clicked']
}
</script>

<template>
    <button @click="$emit('button-clicked')">{{ text }}</button>
</template>

<style lang="scss" scoped>
@use '../assets/scss/variables' as *;

button {
    font-size: 16px;
    font-weight: bold;
    color: white;
    background-color: $my-orange;

    padding: 10px 15px;

    border: 0;

    text-transform: uppercase;
}
</style>