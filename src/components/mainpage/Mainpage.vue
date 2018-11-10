<template>
  <div class="Mainpage">
    <i class="xi-check-circle">dober</i>
    
    <h2>도시      in   out</h2>
    <form action="">
        <input class="city" type="text" placeholder="시작 도시"/>
        <input class="inCity" type="text" placeholder="in"/>
        <input class="outCity" type="text" placeholder="out"/>
    </form>
    
  </div>
</template>

<script>


export default {
  name: 'MainPage',
  components: {

  }
}
</script>
<style>
.city{
    width: 15%
}
.inCity .outCity{
    width : 5%
}
</style>

