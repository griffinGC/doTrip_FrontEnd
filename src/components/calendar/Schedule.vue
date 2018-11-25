<template>
    <div class = "schedule" >
        <div v-for="city in dot" v-bind:key="city.num" class="title">
            <h1>{{city.mainCity}}</h1><br>
            <h4>{{city.inDay}} - {{city.outDay}} </h4>
        </div><br>
        <div v-for="city in dot" v-bind:key="city.num" class="list">
            <div v-for="todo in city.checkList" v-bind:key="todo.id">
                <li>{{todo.title}}</li><br>
                <h6> {{todo.action}} </h6><br><br>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Schedule',
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
            ]
            
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
