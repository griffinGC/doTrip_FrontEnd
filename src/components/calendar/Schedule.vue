<template>
    <div class = "schedule" >
        <div class="title">
            <h1>{{CheckLists.mainCity}}</h1><br>
            <h4>{{CheckLists.inDay}} - {{CheckLists.outDay}} </h4>
        </div><br>
        <h1>{{inDay}}</h1>
        <section class="panel mx-5" >
            <b-form-checkbox id="mark-all"></b-form-checkbox>
            <input v-model="newTask" placeholder="일정을 추가해 주세용!" autofocus class="text-input">
            <b-button  @click="addTask">일정추가</b-button><br>
            <b-form-textarea  v-model="doAction" rows="6" placeholder="할일을 구체적으로 적어주세요!"></b-form-textarea>

        </section>
        <!-- <h1>{{CheckLists.checkList}}</h1> -->
        <ul>
            <li v-for="list in CheckLists.checkList" :key="list.num">
                <router-link :to="{name: 'Actions', params:{id : CheckLists.inDay, num : list.num}}" replace>{{list.title}}</router-link>
                <router-view></router-view>
            </li>
        </ul>
        <!-- <router-view/> -->
    </div>
</template>

<script>
import axios from 'axios'


export default {
    name: 'Schedule',
    created(){
        let startDay = "";
        startDay = this.inDay;
        axios.get(`http://localhost:8000/checkList/${startDay}`)
        .then((res) =>{
            this.CheckLists = res.data
            console.log(this.CheckLists);
        })
    },
    methods:{
        addTask(){
            let nowNum = this.CheckLists.checkList.length +1;
            let nowDay = this.CheckLists.inDay;
            console.log(beforeNum);
            this.axios.put(`http://localhost:8000/checkList/${nowDay}/${nowNum}`, 
            {
                num : nowNum,
                title : this.newTak,
                action : this.doAction
            }).then((res) =>{
                console.log("success")
            })
        }
    },
    data(){
        return {
            CheckLists:"",
            newTask: "",
            doAction:"",
            inDay : this.$route.params.id,
            num : ""
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
