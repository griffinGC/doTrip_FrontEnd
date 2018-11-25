<template>
  <div id="app">
    <router-view/>
    <Nav></Nav>
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

<style lang="scss">

</style>
