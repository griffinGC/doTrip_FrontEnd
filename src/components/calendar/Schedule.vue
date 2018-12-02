<template>
    <div class = "schedule" >
        <div class="title">
            <h1 class="pb-2">{{schedule.mainCity}}</h1>
            <h4>{{schedule.inDay}} - {{schedule.outDay}} </h4>
        </div><br>
        <section class="panel mx-5 my-2 pb-5 px-5" >
            <input v-model="newTask" placeholder="일정을 추가해 주세용!" autofocus class="text-input mx-2">
            <b-button class="my-2" @click="addTask">일정추가</b-button><br>
           <div class="px-5">
                <b-form-textarea  v-model="doAction" rows="4" placeholder="할일을 구체적으로 적어주세요!"></b-form-textarea>
           </div>
        </section>
        <div class="mx-5 row">
            <b-card border-variant="info" class="mx-5 mb-5 col">
                <div class="row">
                    <span class="xi-check-circle pb-2 h4"> My CheckList </span>
                </div>
                    <ul v-for="list in schedule.checkList" :key="list.num" class="mx-3 pt-2">
                        <li class="text-left" ><a href @click.prevent="show_action(list)" >{{list.title}}</a></li>
                    </ul>
            </b-card>
            <b-card border-variant="info" class="mx-5z mb-5 col">
                <div class="row">
                    <span class="xi-check-circle pb-2 h4"> CheckList Content </span>
                </div>
                <div class="action">
                  <textarea v-model="todo"></textarea>
                  <button @click.prevent='save_action()' type="button" name="button">저장</button>
                </div>
            </b-card>
            {{schedule}}
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Actions from "@/components/calendar/Actions.vue";


export default {
    name: 'Schedule',
    components:{Actions},
    created(){
        let startNum = "";
        // startDay = this.inDay;
        startNum = this.dotNum;
        axios.get(`http://localhost:8000/checkList/${startNum}`)
        .then((res) =>{
            this.schedule = res.data
            console.log(this.schedule);
        })
    },
    methods:{
        addTask(){
            let checkNum = this.schedule.checkList.length +1;
            let nowdotNum = this.schedule.num;
            console.log(beforeNum);
            this.axios.put(`http://localhost:8000/checkList/${nowdotNum}/${checkNum}`,
            {
                num : checkNum,
                title : this.newTak,
                action : this.doAction
            }).then((res) =>{
                console.log("success")
            })
        },
        show_action(data){
            this.todo = data.action;
            this.state = data.id;
        },
        save_action(){
          this.schedule.checkList[this.state].action = this.todo;
        }
    },
    data(){
        return {
            schedule:"",
            newTask: "",
            doAction:"",
            dotNum : this.$route.params.id,
            inDay : this.$route.params.id,
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
}
.title{
    padding: 15px 4% 10px;
    font-size: 28px;
    font-weight: bold;
}

</style>
