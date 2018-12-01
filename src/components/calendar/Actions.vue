<template>
    <div class = "doAction" >
        <p>{{Actions.action}}</p>
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
            Actions :"",
            num : "",
            inDay :""
        }
   },
    created(){
        let inDay = this.$route.params.id;
        let num = this.$route.params.num;
       axios.get(`http://localhost:8000/checkList/${inDay}/${num}`)
       .then((res) =>{
           this.Actions = res.data
           console.log(res.data);
       })
   },
   beforeRouteUpdate(to, from, next){
       let inDay = this.$route.params.id;
       let changePath = to.params.num;
       axios.get(`http://localhost:8000/checkList/${inDay}/${changePath}`)
       .then((res) =>{
           this.Actions = res.data
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
