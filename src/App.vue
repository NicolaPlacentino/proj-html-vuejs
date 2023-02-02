<script>
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import AppFixedIcon from './components/AppFixedIcon.vue';
export default {
  name: 'App',
  components: { AppHeader, AppMain, AppFooter, AppFixedIcon },
  data() {
    return {
      store,
    }
  }
}
</script>

<template>
  <AppHeader></AppHeader>
  <AppMain></AppMain>
  <AppFooter></AppFooter>

  <AppFixedIcon></AppFixedIcon>
</template>

<style lang="scss">
@use './assets/scss/style.scss';
</style>