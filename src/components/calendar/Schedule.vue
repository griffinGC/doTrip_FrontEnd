<template>
    <div class = "schedule" >
        <div class="title">
            <h1 class="pb-2">{{CheckLists.mainCity}}</h1>
            <h4>{{CheckLists.inDay}} - {{CheckLists.outDay}} </h4>
        </div><br>
        <section class="panel mx-5 my-2 pb-5 px-5" >
            <b-form-checkbox id="mark-all"></b-form-checkbox>
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
                    <ul v-for="list in CheckLists.checkList" :key="list.num" class="mx-3 pt-2">
                        <li class="text-left" ><a href @click.prevent="toggleMore()" >{{list.title}}</a></li>
                    </ul>
            </b-card>
            <b-card border-variant="info" class="mx-5 mb-5 col">
                <div class="row">
                    <span class="xi-check-circle pb-2 h4"> CheckList Content </span>  
                </div>
                    <ul v-for="list in CheckLists.checkList" :key="list.num" class="mx-3 pt-2">
                        <Actions v-show ="isShort===false"  v-bind:listAction="list.action"> </Actions>
                    </ul>
            </b-card>
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

                
        },
        toggleMore(){
            this.isShort = !this.isShort;

        }
    },
    data(){
        return {
            CheckLists:"",
            newTask: "",
            doAction:"",
            inDay : this.$route.params.id,
            num : "",
            isShort :true

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
