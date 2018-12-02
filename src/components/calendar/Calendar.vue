<template>
<div class="calendar py-5 px-5">
  <full-calendar :config="config" :events="events" @event-click="eventClick"></full-calendar>
  <!-- <h1>{{schedule}}</h1> -->
  <!-- <h1>{{events}}</h1> -->
</div>
</template>

<script>
// @ is an alias to /src
import { FullCalendar } from 'vue-full-calendar';
import 'fullcalendar/dist/fullcalendar.css';
import axios from 'axios';


export default {
  name: 'Calendar',
  methods: {
    eventClick(event){
      if (event.url) {
      window.open(event.url);
      return false;
      }
    },
  },
  components: {
    FullCalendar,
  },
    created(){
      this.$http.get('/api/dot/load').then((result)=>{
          this.schedule = result.data.data;
          console.log(result.data)
            if(result.data.success == 0){
            this.$router.push('Login')
          }
        }).then((result) =>{
            for(let i = 0; i < this.schedule.length; i++)
            {
              let total ={};
              let out = new Date(this.schedule[i].outDay);
              out.setDate(out.getDate() + 1);
              let year = (out.getFullYear());
              let date = (out.getDate()>9 ? '' : '0') + out.getDate();
              let month = (out.getMonth()+1>9 ? '' : '0') + (out.getMonth()+1);
              out = year+'-'+month+'-'+date;
              // var date = this.schedule[i].outDay
              total.title = this.schedule[i].mainCity;
              total.start = this.schedule[i].inDay;
              total.end = out;
              total.url = "/Calendar/"+this.schedule[i].num; 
              this.events.push(total);
            }
            console.log("create schedule?")
            }
        )
  },
  
  data(){
    return{
     config :{
       defaultView : 'month'
     },
     schedule:"",
     events: [
      ],
      config: {
        defaultView : 'month',
        header: {
          left: 'prev',
          center: 'title',
          right: 'next'
        },
        height : 500
      }
    }
  },
  props: {}
}
</script>
