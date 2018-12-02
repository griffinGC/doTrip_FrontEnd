<template>
  <div>
      <span class="row h5 my-1">
        <router-link :to="getUrl(num)">
        <div class=" h4 xi-check-circle col text-center"></div>
        </router-link>
          <div class="city col">{{mainCity}}</div>
          <div class="in col">{{inDay}}</div>
          <div class="out col">{{outDay}}</div>
      </span>
  </div>
</template>

<script>
import dragula from 'dragula'
import 'dragula/dist/dragula.css'


export default {
  name: 'CityList',
  props:[
      'mainCity', 'inDay', 'outDay','num'
  ],
  methods:{
    getUrl(Id) {
      return "/Calendar/" + Id;
    },
    deleteCity(num){
      
    }
  },
  data(){
    return {
      dot:null,
    }
  }
}
</script>



<style>

</style>

