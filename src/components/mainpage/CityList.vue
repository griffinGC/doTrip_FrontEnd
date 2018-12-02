<template>
  <div>
    <b-card border-variant="info">
      <div class="row h5 cityList my-1">
        <div class=" h4 xi-check-circle col text-center"></div>
          <div class="city col">{{mainCity}}</div>
          <div class="in col">{{inDay}}</div>
          <div class="out col">{{outDay}}</div>
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
      'mainCity', 'inDay', 'outDay'
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

