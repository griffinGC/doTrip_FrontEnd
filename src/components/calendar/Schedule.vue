<template>
    <div class = "schedule" >
        <div class="title">
            <h1>{{checkList.mainCity}}</h1><br>
            <h4>{{checkList.inDay}} - {{checkList.outDay}} </h4>
        </div><br>
        
        <section class="panel mx-5" >
            <b-form-checkbox id="mark-all"></b-form-checkbox>
            <input v-model="newTask" placeholder="일정을 추가해 주세용!" autofocus class="text-input">
            <b-button  @click="addTask">일정추가</b-button><br>
            <b-form-textarea  v-model="doAction" rows="6" placeholder="할일을 구체적으로 적어주세요!"></b-form-textarea>

        </section>
        <ul>
            <li v-for="list in checkList" :key="list.idx">
                <router-link :to="{name: '', params:{id : list.inday}}">{{list.title}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'


export default {
    name: 'Schedule',
    beforeMount :function(){
        this.$http.get("http://localhost:8000/checkList")
        .then((res) =>{
            this.checkList = res.data
        })
    },
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
