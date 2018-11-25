<template>
  <div class="test">
    <h1>hello</h1>
    {{test}}
  </div>
</template>

<script>


export default {
  created () {
    this.$http.get('/api/test')
    .then((result) =>{
      this.test = result.data
    })
  },
  data () {
    return {
    test: 'hello'
    }
  }
}
</script>


<style lang="css">

</style>
