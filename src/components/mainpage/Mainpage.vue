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
            <!-- <i class="xi-plus-square" v-on:click="addChecklist"></i> -->
            <!-- <div class="checkList">

            </div> -->
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
            checkList :[]
            
          })
          this.cityInfo.mainCity = "시작도시";
          this.cityInfo.inDay ="in";
          this.cityInfo.outDay="out"
      },
    //   addCheckList(){
    //       this.chekList.push({

    //       })
    //   }

  },
  data(){
    return {
        cityInfo:[
            {
            mainCity : '',
            inDay : '',
            outDay : ''
            }            
        ],
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
    width: 20%
}
.inCity , .outCity{
    width : 5%
}

i{
    padding: 20px;
}
</style>

