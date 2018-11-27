<template>
    <div class = "schedule" >
        <div v-for="city in dot" v-bind:key="city.num" class="title">
            <h1>{{city.mainCity}}</h1><br>
            <h4>{{city.inDay}} - {{city.outDay}} </h4>
        </div><br>
        
        <section class="panel mx-5" >	
            <b-form-checkbox id="mark-all"></b-form-checkbox>
            <input v-model="newTask" @keyup.enter="addTask" placeholder="일정을 추가해 주세용!" autofocus class="text-input">
            <b-button :variant="primary"  @click="addTask">일정추가</b-button><br>
            <b-form-textarea  id="doAction" v-model="doAction" rows="6" placeholder="할일을 구체적으로 적어주세요!"></b-form-textarea>

        </section>
        <div v-for="city in dot" v-bind:key="city.num" class="list">
            <div v-for="todo in city.checkList" v-bind:key="todo.id">
                <div class="row">
                    <div class="col text-center my-3">
                        <li class=todoTitle>{{todo.title}}</li>
                    </div>
                    <div class="col float-left">
                    <b-button @click="showTask">▼</b-button>
                    <b-button @click="hideTask">▲</b-button>
                    </div>
                </div>
                <h6 v-show="okAction" v-bind="todo.okAction"> {{todo.action}} </h6><br><br>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'


export default {
    name: 'Schedule',
    methods:{
        addTask(){
            this.axois.post()
        },
        showTask(){
            this.okAction = true;
        },
        hideTask(){
            this.okAction = false;
        }

    },
    data(){
        return {
            dot:[
                {
                    num :1,
                    mainCity : 'BCN',
                    inDay : '2018.08.01',
                    outDay : '2018.09.02',
                    checkList:[
                    {
                        id:'0',
                        title :'가우디 투어 가기',
                        action : "투어 예약해야하눈데 어디서 하지이이이이이 야경투어도 꽁짜인데 없을라나?!"
                    },
                    {
                        id:'1',
                        title :'해변 가기',
                        action : "비치웨어 챙겨가기! 중요한건 숙소에 두자 꼭꼭"
                    }]
                }
            ],
            okAction : false
            
        }
   },
}
</script>

<style>
#doAction{
    
}
.todoTitle{
    font-size: 20px;
}
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
