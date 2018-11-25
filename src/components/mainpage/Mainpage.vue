<template>
  <div class="Mainpage container my-5">
      <form class="putCity row text-center">
          <div class="col text-right">
              <i class="xi-home-o row h3"></i>
              <ul class="row"></ul>
          </div>
          <div class="col">
              <ul class="row h3 my-1">도시</ul>
              <input class="mainCity row my-1 mx-1" type="text" placeholder="시작 도시" v-model="mainCity"/>
          </div>
          <div class="col">
              <ul class="row h3">in</ul>
              <input class="inCity col mx-1" type="date" v-model="inDay"/>
          </div>
          <div class="col">
              <ul class="row h3">out</ul>
              <input class="outCity row mx-1" type="date" v-model="outDay" @keyup.enter="addCity"/>
          </div>
          <div class="col">
              <ul class="row h3">add</ul>
              <i class="xi-plus-circle-o row float-left" v-on:click="addCity" ></i>
          </div>
      </form>
        <!-- <i class="xi-home-o col"></i>
        <ul class="col">도시</ul>
        <ul class="col">in</ul>
        <ul class="col">out</ul>
        <ul class="col">add</ul>
      </div>
      <div>
            <form class="putCity row">
                <ul class="col"></ul>
                <input class="mainCity col mx-1" type="text" placeholder="시작 도시" v-model="mainCity"/>
                <input class="inCity col mx-1" type="date" v-model="inDay"/>
                <input class="outCity col mx-1" type="date" v-model="outDay" @keyup.enter="addCity"/>
                <i class="xi-plus-circle-o col float-left" v-on:click="addCity" ></i>     
            </form>      
        </div> -->
        <div class="putDot" v-for="city in dot" v-bind:key="city.id" v-bind="city">
            <div class="cityLists" v-for="city in dot" v-bind:key="city.id" v-bind="city">
                <!-- <CityList v-for="city in dot" v-bind:key="city.id" v-bind="city"> -->
                <i class="xi-check-circle"></i>
                <span  class="city">{{city.mainCity}}</span>
                <span class="in">{{city.inDay}}</span>
                <span class="out">{{city.outDay}}</span>
                <i class="xi-trash-o" v-on:click="deleteCity(city.num)"></i>
            </div>
        </div>   
    <h1>{{dot}}</h1>
  </div>
</template>

<script>
import dragula from 'dragula'
import 'dragula/dist/dragula.css'
import CityList from '@/components/mainpage/CityList'

export default {
  name: 'MainPage',

  components: {
      CityList
  },

  methods:{
      addCity(){
          if(!this.mainCity){
              alert("도시를 입력해 주세요!");
              return false;
          }
          else if(this.inDay >= this.outDay){
              alert("날짜를 제대로 입력해 주세요!");
              return false;
          }
          for(let i = 0; i< this.dot.length; i++)
          {
              if(this.dot.length === 0){
                  break;
              }
              else if(this.inDay < this.dot[i].outDay){
                  alert("날짜가 맞지 않습니다!")
                  return false;
              }
          }
          this.dot.push({
            num : ++this.num,
            mainCity : this.mainCity,
            inDay : this.inDay,
            outDay : this.outDay,
            url : `/Calender/${this.mainCity}/${this.inDay}`
          })
          this.mainCity="";
          this.inDay= this.outDay;
          this.outDay = "";
      },
      deleteCity(num){
        this.dot.splice(num,1);
      }      
  },
  updated(){
      if(this.dragulaCards) this.dragulaCards.destroy()

      this.dragulaCards = dragula([
          ...Array.from(this.$el.querySelectorAll('.cityLists'))
      ]).on('drop',(el, wrapper, target, siblings)=>{
          console.log('drop')
      })
  },
  data(){
    return {
        dot:[
            {
                num : 0,
                mainCity : 'city',
                inDay : '',
                outDay : ''
            }
        ],
        mainCity:'',
        inDay:'',
        outDay:'',
        num : 0,
        dragulaCards: null
    }
  }
}
</script>



<style>
/* span{
    padding : 3%;
}
.mainCity{
    margin-left : 5%;
    width: 20%
}
.inCity , .outCity{
    width : 15%
}

i{
    padding: 20px;
} */
</style>

