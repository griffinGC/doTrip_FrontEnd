<template>
  <div>
      <span class="row h5 my-1 mr-0" style="width : 100%">
        <router-link :to="getUrl(num)">
        <div class=" h4 xi-check-circle text-center pt-1 pl-2" v-b-tooltip.hover title="In detail!"></div>
        </router-link>
        <!-- <h2> -->
        <span class="city data" >{{mainCity}}</span>
        <span class="in data">{{inDay}}</span>
        <span class="out data">{{outDay}}</span>
        <!-- </h2> -->

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
.data{
  font-size : 18px;
  width : 30%;
}
.row{
  margin-left: 0;
  margin-right : 0;
}
</style>
