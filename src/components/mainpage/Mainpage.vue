<template>
  <div class="Mainpage">
    <i class="xi-home-o"></i>
    <span>도시</span><span>in</span><span>out</span> 
    <div class="city">
        <form class="putCity">
            <input class="mainCity" type="text" placeholder="시작 도시" v-model="mainCity"/>
            <input class="inCity" type="date" v-model="inDay"/>
            <input class="outCity" type="date" v-model="outDay" @keyup.enter="addCity"/>
            <i class="xi-plus-circle-o" v-on:click="addCity" ></i>     
        </form>      
    </div>
    <div class="putDot" v-for="city in dot" v-bind:key="city.id" v-bind="city">
        <i class="xi-check-circle"></i>
        <span  class="city">{{city.mainCity}}</span>
        <span class="in">{{city.inDay}}</span>
        <span class="out">{{city.outDay}}</span>
        <i class="xi-trash-o" v-on:click="deleteCity(city.num)"></i>
    </div>
        
    <h1>{{dot}}</h1>
  </div>
</template>

<script>

export default {
  
  name: 'MainPage',

  components: {
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
    }
  }
}
</script>



<style>
span{
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
}
</style>

