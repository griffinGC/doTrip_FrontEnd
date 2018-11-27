<template>
  <div class="cityList">
    <i class="xi-check-circle"></i>
    <span  class="city">{{mainCity}}</span>
    <span class="in">{{inDay}}</span>
    <span class="out">{{outDay}}</span>
    <i class="xi-trash-o" v-on:click="deleteCity(city.num)"></i>
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
    deleteCity(num){
        this.dot.splice(num,1);
      }      
  },
  data(){
    return {
    }
  }
}
</script>



<style>

</style>

