<template>
  <div id="app">
    <Nav></Nav>
    <router-view/>
  </div>
</template>

<script>
// import Calendar from '@/components/calendar/Calendar.vue'
// import MainPage from '@/components/mainpage/Mainpage.vue'
import Nav from '@/components/Nav'

export default {
  name: 'app',
  components: {
    Nav,
    // Calendar,
    // MainPage
  }
}
</script>

<style lang="scss" src="./assets/css/style.scss">

</style>
