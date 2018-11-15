<template>
  <div class="Mainpage">

    
    <i class="xi-home-o"></i>
    <span>도시</span><span>in</span><span>out</span> <i class="xi-plus-circle-o" v-on:click="addCity"></i>
        
    <div class="putDot" v-for="city in dot" v-bind:key="city.num" v-bind="city">
        <form class="putCity">
            <i class="xi-check-circle"></i>
            <input class="mainCity" type="text" placeholder="시작 도시" v-model="city.mainCity"/>
            <input class="inCity" type="text" placeholder="in" v-model="city.inDay"/>
            <input class="outCity" type="text" placeholder="out" v-model="city.outDay"/>
            <i class="xi-plus-square" v-on:click="addCheckList"></i>            
            <ul class="list-item" v-show="isCheck">

            </ul>
        </form>
    </div>
    <div v-for="action in dot" v-bind:key="action.index">
        <h1> {{action.checkLists[0].title}}</h1>
    </div>
  </div>
</template>

<script>
import CheckList from '@/components/mainpage/checkList.vue'

export default {
  
  name: 'MainPage',

  components: {
      CheckList
  },

  methods:{
      addCity(){
          this.dot.push({
            num : ++this.num,
            mainCity : '',
            inDay : '',
            outDay : '',
            checkLists :{
                id : '',
                title : '',
                actions : ''
            }
          })
          this.dot.mainCity = "시작도시";
          this.dot.inDay ="in";
          this.dot.outDay="out"
      },
      addCheckList(){
          this.isCheck = true;
          this.dot.checkLists.push({
                id : '',
                title : '',
                actions : ''
          })
      }

  },
  data(){
    return {
        dot:[
            {
                mainCity : 'seoul',
                inDay : '',
                outDay : '',
                checkLists:[
                        {
                    id : '',
                    title : 'tllll',
                    actions : 'do something'
                        }
                    ]
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

