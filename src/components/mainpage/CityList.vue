<template>
  <div class="cityList">
    <div class="putDot" v-for="city in dot" v-bind:key="city.id" v-bind="city">
        <div class="cityLists">
            <i class="xi-check-circle"></i>
            <span  class="city">{{mainCity}}</span>
            <span class="in">{{inDay}}</span>
            <span class="out">{{outDay}}</span>
        </div>
    </div>
        

  </div>
</template>

<script>
import dragula from 'dragula'
import 'dragula/dist/dragula.css'

export default {
  name: 'CityList',
  props:[
      'mainCity',
      'inDay',
      'outDay'

  ],
  components: {
  },

  methods:{
      
  },
  data(){
    return {
    }
  }
}
</script>



<style>

</style>

