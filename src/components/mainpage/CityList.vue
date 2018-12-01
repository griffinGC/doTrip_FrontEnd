<template>
  <div>
    <b-card>
      <div class="row h5 cityList my-1">
        <div class=" h4 xi-check-circle col text-center"></div>
          <div class="city col">{{dot.mainCity}}</div>
          <div class="in col">{{dot.inDay}}</div>
          <div class="out col">{{dot.outDay}}</div>
          <div class="h4 xi-trash-o col text-center" v-on:click="deleteCity(city.num)"></div>
      </div>
    </b-card>
  </div>
</template>

<script>
import dragula from 'dragula'
import 'dragula/dist/dragula.css'


export default {
  name: 'CityList',
  props:[
      'dot.mainCity',
      'dot.inDay',
      'dot.outDay'
  ],
  methods:{
  },
  data(){
    return {
      dot:null
    }
  }
}
</script>



<style>

</style>

