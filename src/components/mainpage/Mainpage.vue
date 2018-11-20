<template>
  <div class="Mainpage">

    
    <i class="xi-home-o"></i>
    <span>도시</span><span>in</span><span>out</span> 
        
    <div class="putDot" v-for="city in dot" v-bind:key="city.num" v-bind="city">
        <form class="putCity">
            <i class="xi-check-circle"></i>
            <input class="mainCity" type="text" placeholder="시작 도시" v-model="city.mainCity"/>
            <input class="inCity" type="date" placeholder="in" v-model="city.inDay"/>
            <input class="outCity" type="date" placeholder="out" v-model="city.outDay"/>
            <i class="xi-plus-circle-o" v-on:click="addCity"></i>     
            <!-- <div class="list" v-for="list in dot" :key="list.id" >
                <component v-for="item in dot.checkLists" :key="item.id" :is="item"></component>            
            </div> -->
            <div class="list" v-for="list in confirmCheck" :key="list.id" :is="list" >
                <component v-for="item in list.checkLists" :key="item.id" :is="item"></component>            
            </div>
        </form>      
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
            checkLists:[]
          })
      },
      addCheckList(){
        this.confirmCheck.push('CheckList');
        this.dot.push(confirmCheck);
        // for(let i = 0; i<this.dot.length; i++)
        // {
        //     // this.dot[i].checkLists.push(confirmCheck);
            this.dot[i].checkLists.push('CheckList');
        // }
      }

  },
  data(){
    return {
        dot:[
             {
                mainCity : '',
                inDay : '',
                outDay : '',
                checkLists:
                [
                    // {
                    // id : '',
                    // title : '',
                    // actions : ''
                    // }
                ]
            }            
        ],
        confirmCheck:[],
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
    width : 15%
}

i{
    padding: 20px;
}
</style>

