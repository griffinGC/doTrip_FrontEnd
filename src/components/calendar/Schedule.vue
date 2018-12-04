<template>
    <div class = "schedule" >
        <div class="title">
            <h1 class="pb-2">{{schedule.mainCity}}</h1>
            <h4>{{schedule.inDay}} - {{schedule.outDay}} </h4>
            <!-- <h1>{{schedule.checkList}}</h1> -->
        </div><br>

        <section class="panel mx-5 my-2 pb-5 px-5" >
            <input v-model="newTask" placeholder="일정을 추가해 주세용!" autofocus class="text-input mx-2 mb-2" @keyup.enter="addTask">
           <div class="px-5">
                <b-form-textarea  v-model="doAction" rows="4" placeholder="할일을 구체적으로 적어주세요!"></b-form-textarea>
           </div>
           <b-button class="my-2" @click="addTask" @keyup:enter="addTask" variant="primary">일정추가</b-button>
        </section>
        <div class="mx-5 row">
            <div class="col">
                <span class="xi-check-circle pb-2 h4"> My CheckList </span>
                <b-card border-variant="info" class="mx-2 mb-5">
                    <ul v-for="list in schedule.checkList" :key="list.num" class="mx-1 pt-2 row">
                        <li class="text-left col-8" ><a href @click.prevent="show_action(list)" >{{list.title}}</a></li>
                        <ul class="h4 xi-trash-o text-center col-1"  @click="deleteList(list.id)"></ul> 
                        <!-- 쓰레기통 클릭했을 때 구현하기 -->
                    </ul>
                </b-card>
            </div>
            <div class="col">
                <span class="xi-check-circle pb-2 h4"> CheckList Content </span>
                <b-card border-variant="info" class="mx-2 mb-5">
                    <div class="text-center">
                        <b-form-textarea v-model="todo" class="row text-center ml-1"></b-form-textarea>
                        <b-button @click.prevent='save_action()' variant="primary" class="row mt-2 text-center" >저장</b-button>
                    </div>
                </b-card>
            </div>
        </div>
        <!-- {{this.schedule}} -->
    </div>
</template>

<script>
import axios from 'axios'
import Actions from "@/components/calendar/Actions.vue";


export default {
    name: 'Schedule',
    components:{Actions},
    created(){
        this.$http.get(`/api/dot/loadone/${this.dotNum}`).then((result)=>{
        // this.$http.get(`http://localhost:8000/checkList/${this.dotNum}`).then((result)=>{
          this.schedule = result.data.data;
            if(result.data.success == 0){
            this.$router.push('/login')
          }
          })
    },
    methods:{
        addTask(){
            let nowdotNum = this.schedule.num;
            let checkNum =""
            if(!this.schedule.checkList)
            {
                checkNum = 0
                this.schedule.checkList = [];
                }
            else{
                checkNum = this.schedule.checkList.length;
            }
            console.log(checkNum);
            this.schedule.checkList.push(
                {
                    id : checkNum,
                    title : this.newTask,
                    action : this.doAction
                }
            )
            this.schedule_save();
            this.newTask = "";
            this.doAction = "";
        },
        show_action(data){
            this.todo = data.action;
            this.state = data.id;
        },
        save_action(){
          this.schedule.checkList[this.state].action = this.todo;
        this.schedule_save();
        },
        schedule_save(){
            this.$http.post(`/api/dot/saveone`,{
                num : this.dotNum,
                dot : this.schedule
            }).then((res) =>{
                console.log(res.data);
            })
        },
        deleteList(idx){
            this.schedule.checkList.splice(idx,1);
            for(let i = 0; i<this.schedule.checkList.length; i++)
            {
                this.schedule.checkList[i].id = i;
            }
            console.log(this.schedule);
            this.schedule_save();

        }
    },
    data(){
        return {
            schedule:"",
            newTask: "",
            doAction:"",
            dotNum : this.$route.params.id,
            num : "",
            todo : null,
            state : -1,

        }
   },
}
</script>

<style>
.schedule{
  text-align: center;
  margin-top: 20px;
   color:white;
}
.title{
    padding: 15px 4% 10px;
    font-size: 28px;
    font-weight: bold;
}
.panel{
     color:white;
}

body{
  background : url(../auth/bg2.jpg);
	background-repeat: no-repeat;
	background-size : cover;
}

</style>
