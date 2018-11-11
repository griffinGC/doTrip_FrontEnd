<template>
  <div class="Mainpage">

    
    <i class="xi-home-o"></i>
    <span>도시</span><span>in</span><span>out</span> <i class="xi-plus-circle-o" v-on:click="addCity"></i>
        
    <div class="putCityInfo" v-for="city in cityInfo" v-bind:key="city.num" v-bind="city">
        <form class="putCity">
            <i class="xi-check-circle"></i>
            <input class="mainCity" type="text" placeholder="시작 도시" v-model="city.mainCity"/>
            <input class="inCity" type="text" placeholder="in" v-model="city.inDay"/>
            <input class="outCity" type="text" placeholder="out" v-model="city.outDay"/>
            <i class="xi-plus-square" v-on:click="addCheckList"></i>            
            <!-- <div class="checkList" v-for="checklist in checkList" v-bind="checklist" v-bind:key="checklist.index" v-show="isCheck"> -->
            <div class="checkList" v-for="city in cityInfo" v-bind="checklist" v-bind:key="city.index" v-show="isCheck">   
                <input type="checkbox" class="checklist">
                <input type="text" class="checkMain">
            </div>
        </form>
    </div>    
    <h1>{{cityInfo}}</h1> 

  </div>
</template>

<script>


export default {
  
  name: 'MainPage',
  components: {

  },
  methods:{
      addCity(){
          this.cityInfo.push({
            num : ++this.num,
            mainCity : '',
            inDay : '',
            outDay : '',
            // checkList :[]
          })
          this.cityInfo.mainCity = "시작도시";
          this.cityInfo.inDay ="in";
          this.cityInfo.outDay="out"
      },
      addCheckList(){
          this.isCheck = true;
      }

  },
  data(){
    return {
        cityInfo:[
            {
            mainCity : '',
            inDay : '',
            outDay : '',
            checkList:[]
            }            
        ],
        num : 0,
        isCheck : false
    }
  }
}
</script>



<style>
span{
    padding : 3%;
}
.mainCity{
    width: 20%
}
.inCity , .outCity{
    width : 5%
}

i{
    padding: 20px;
}
</style>

