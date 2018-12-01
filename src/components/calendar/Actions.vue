<template>
    <div class = "schedule" >
        <div class="title">
            <p>{{checkList.action}}</p>
        </div>
        
    </div>
</template>

<script>
import axios from 'axios'


export default {
    name: 'Actions',
    methods:{
        addTask(){
                
        }
    },
    data(){
        return {
            checkList:{
                idx: 0,
                title : null,
                action : null,
            },
        }
   },
   beforeMount(){
       this.$http.get(""+this.id)
       .then((res) =>{
           this.checkList = res.data
       })
   },
   beforeRouteUpdate(){
       this.$http.get('url'+to.params.id)
       .then((res) =>{
           this.checkList = res.data
       })
       next();
   }
}
</script>

<style>
.schedule{
  text-align: center;
  margin-top: 60px;
} 
.title{
    padding: 20px 4% 10px;
    font-size: 28px;
    font-weight: bold;
}
</style>
