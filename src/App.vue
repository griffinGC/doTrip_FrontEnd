<template>
  <div id="app">
    <main>
    <router-view/>
    </main>
     <router-view name="footer"></router-view>
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
