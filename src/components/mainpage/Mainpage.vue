<template>
  <div class="my-5 mx-5">
      <b-card border-variant="info">
      <div class ="row text-center h4 my-2">
        <ul class="xi-home-o col h1"></ul>
        <ul class="col mt-2">도시</ul>
        <ul class="col mt-2">in</ul>
        <ul class="col mt-2">out</ul>
        <ul class="col mt-2">add</ul>
      </div>
      </b-card>
      <b-card class="my-2">
      <div>
        <form class="putCity row my-2 text-center">
            <i class="h4 xi-check-circle col"></i>
            <b-form-input class="mainCity col mx-1 text-center" type="text" placeholder="시작 도시" v-model="mainCity"/>
            <b-form-input class="inCity col mx-1 text-center" type="date" v-model="inDay"/>
            <b-form-input class="outCity col mx-1 text-center" type="date" v-model="outDay" @keyup.enter="addCity"/>
            <div class="col add h2 xi-plus-circle-o text-center" v-on:click="addCity" ></div>
        </form>
      </div>
      </b-card>
      <h1>{{dot}}</h1>
      <b-card border-variant="info">
        <div class="cityLists h5 text-center row" v-for="city in dot" v-bind:key="city.id" v-bind="city">
            <CityList v-bind="city" class="col"></CityList>
            <span class="h4 xi-trash-o text-center col" v-on:click="deleteCity(num)"></span> 
        </div>
        </b-card>
        <div  class="text-center pt-3">
            <b-button v-on:click="addAll">Save</b-button>
        </div>
  </div>
</template>

<script>
import dragula from 'dragula'
// import 'dragula/dist/dragula.css'
import CityList from '@/components/mainpage/CityList'
import axios from 'axios'


export default {
  name: 'MainPage',

  components: {
      CityList
  },
    created(){
      this.load_dot();
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
            // num : ++this.num,
            num : this.dot.length,
            mainCity : this.mainCity,
            inDay : this.inDay,
            outDay : this.outDay,
          })
          this.mainCity="";
          this.inDay= this.outDay;
          this.outDay = "";
        //   this.axios.post("http://localhost:8000/addDot",
        //   {
        //       num : ++this.num,
        //       mainCity : this.mainCity,
        //       inDay : this.inDay,
        //       outDay : this.outDay
        //   }).then(response =>{
        //       console.log("success");
        //       this.mainCity="";
        //       this.inDay= this.outDay;
        //       this.outDay = "";
        //   })


      },
      deleteCity(num){
        this.dot.splice(num,1);
      },
      addAll(){
          this.$http.post('api/dot/save',
          {
            dotList : this.dot
          }).then(response =>{
            if(response.data.success){
              console.log(response);
              alert('저장 성공!')
            }
            else{
              alert('저장 실패!')
            }
          })
      },
      load_dot(){
        this.$http.get('/api/dot/load').then((result)=>{
          this.dot = result.data.data;
        })
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
        dot:[],
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
.add{
    color:black;
    background-color: white;
}
/* .putCity{
    width: 100%;
}
.putCity-item{
    width: 25%;
    float: left;
    text-align: center;
}

.mainCity{
    width: 20%
}
.inCity , .outCity{
    width : 15%
} */

</style>
