<template>
  <div class="my-5 mx-5">
    <b-container id="main">
      <b-card class="my-2">
        <h5><b-alert show>Add New Dot! </b-alert></h5>
      <div>
        <form class="putCity row my-2 text-center">
            <i class="h4 xi-check-circle text-center dot"></i>
            <span>
              <b-form-input class="mainCity mx-1 text-center input-dot" style="width : 95%" type="text" placeholder="시작 도시" v-model="mainCity"/>
            </span>
            <span>
              <b-form-input class="inCity mx-1 text-center input-dot" style="width : 95%" type="date" v-model="inDay"/>
            </span>
            <span>
              <b-form-input class="outCity mx-1 text-center input-dot" type="date" v-model="outDay" @keyup.enter="addCity"/>
            </span>
            <i class="add h2 xi-plus-circle-o text-center dot-add" variant="primary" style="cursor:pointer" v-on:click="addCity" v-b-tooltip.hover title="Add!"></i>
        </form>
        <!-- <h2>{{dot}}</h2> -->
      </div>
      </b-card>
      <b-card border-variant="info" >
          <h5><b-alert  show variant="primary">Dot List </b-alert></h5>

          <div>
            <span class="row">
              <span style="width:11%" class=" h3">Dot</span>
              <span style="width:19%" class="  h3">City</span>
              <span style="width:33%" class="  h3">StartDay</span>
              <span style="width:20%" class=" h3">EndDay</span>
              <span style="width:17%" class=" h3">Delete</span>
            </span>
          </div>
          <hr class="ml-0">
          <div class="cityLists">
            <div class="temp h5 text-center row ml-1 pt-1" v-for="city in dot" v-bind:key="city.id" v-bind="city">
            <CityList v-bind="city" class="clist col-11 pr-0"></CityList>
            <div class="h4 xi-trash-o text-center mt-2 pr-2 col-0 " style="cursor:pointer" v-on:click="deleteCity(city.num)" v-b-tooltip.hover title="Delete!"></div>
        </div>
        </div>
        </b-card>
        <div  class="text-center pt-3 pb-5">
            <b-button v-on:click="addAll" variant="primary">Save</b-button>
        </div>
    </b-container>
  </div>
</template>

<script>
import dragula from 'dragula'
// import 'dragula/dist/dragula.css'
import CityList from '@/components/mainpage/CityList'
// import axios from 'axios'


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
          else if(this.inDay > this.outDay){
              alert("날짜를 제대로 입력해 주세요!");
              return false;
          }
          // for(let i = 0; i< this.dot.length; i++)
          // {
          //     if(this.dot.length === 0){
          //         break;
          //     }
          //     else if(this.inDay < this.dot[i].outDay){
          //         alert("날짜가 맞지 않습니다!")
          //         return false;
          //     }
          // } 
          this.dot.push({
            num : this.dot.length,
            mainCity : this.mainCity,
            inDay : this.inDay,
            outDay : this.outDay,
          })
          this.mainCity="";
          this.inDay= this.outDay;
          this.outDay = "";


      },
      deleteCity(idx){
        this.dot.splice(idx,1);
        for(let i = 0; i<this.dot.length; i++)
        {
            this.dot[i].num = i;
        }
        console.log(this.dot);
      },
      addAll(){
          this.make_order().then(()=>{
            console.log("hello");
            this.$http.post('api/dot/save',
            {
              dotList : this.tmp
            }).then(response =>{
              if(response.data.success){
                console.log(response.data);
                alert('저장 성공!')
              }
              else{
                alert('저장 실패!')
              }
            })
          })

      },
      load_dot(){
        this.$http.get('/api/dot/load').then((result)=>{
          this.dot = result.data.data;
          console.log(result.data)
            if(result.data.success == 0){
            this.$router.push('Login')
          }
        })
      },
      make_order(){
        return new Promise(function(resolve,reject){
          var first = document.querySelector(".cityLists").childNodes[0];
          var order = [];
          var child = first;
          while(child){
            console.log(child.getAttribute("num"));
            order.push(child.getAttribute("num"));
            child = child.nextSibling;
          }
          resolve(order)
        })
        .then((order)=>{
          console.log(order);
          this.tmp = [];
          this.tmp = JSON.parse(JSON.stringify(this.dot));
          for(let i in order){
            this.tmp[order[i]].num = parseInt(i);
            // this.dot[order[i]].num = order[i];
          }
        })
        .then(()=>{
          this.tmp.sort(function (a, b) {
            if (a.num > b.num) {
              return 1;
            }
            if (a.num < b.num) {
              return -1;
            }
            // a must be equal to b
            return 0;
          });
        })
        // .then(()=>{
        //   // console.log(copy[0],copy[1],copy[2]);
        //   for(let i in this.tmp){
        //     for(let j in this.tmp){
        //       console.log(i,j);
        //       if(i == this.tmp[j].num){
        //         this.dot[i] = this.tmp[j];
        //         console.log(this.tmp[j].mainCity + this.tmp[j].num);
        //         console.log(this.dot)
        //       }
        //     }
        //   }
        // })
      },
      clone : function(obj){
        if (obj === null || typeof(obj) !== 'object')
        return obj;

        var copy = obj.constructor();

        for (var attr in obj) {
          if (obj.hasOwnProperty(attr)) {
            copy[attr] = obj[attr];
          }
        }

        return copy;
      }
  },
  updated(){
      if(this.dragulaCards) this.dragulaCards.destroy()

      this.dragulaCards = dragula([
          ...Array.from(this.$el.querySelectorAll('.cityLists'))
      ]).on('drop',(el, target, source, siblings)=>{
    })
  },
  data(){
    return {
        dot:[],
        tmp: [],
        mainCity:'',
        inDay:'',
        outDay:'',
        num : 0,
        dragulaCards: null,
        order : [],
    }
  }
}
</script>



<style lang="css">
.add{
    color:black;
    background-color: white;
}
#main {
  max-width : 65%;
}
/*
.jumbotron{
  background-color: #edfcff;
  border-radius: 18px;
  padding : 0;
} */

body{
  background : url(../auth/bg2.jpg);
	background-repeat: no-repeat;
	background-size : cover;
}
.input-dot {
  margin-top : 0.25rem;
  margin-left : 1em;
  width : 95%;
}
span{
  text-align: center;
}
.dot{
  padding-top : 0.8rem;
  padding-left : 1em;
  padding-right : 0.2em;

}
.dot-add{
  padding : 0.3em 0.5em 0.3em 0.2em;

  /* padding-right : 1em; */
}
.dot-table{
  font-size : 18px;
  width : 30%;
}
.temp {
  height: flex;
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
