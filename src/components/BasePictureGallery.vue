<script>
import { store } from '../store';
export default {
    name: 'BasePictureGallery',
    data() {
        return {
            store
        }
    },
    props: {
        imageGallery: Array,
        paddingX: Boolean
    }
}
</script>

<template>
    <div class="d-flex">
        <figure v-for="img in imageGallery" class="w-25 py-2 m-0" :class="{ 'px-1': paddingX }">
            <img :src="img" :alt="'stock image'" class="img-fluid">
        </figure>
    </div>
</template>

<style lang="scss" scoped>

</style>