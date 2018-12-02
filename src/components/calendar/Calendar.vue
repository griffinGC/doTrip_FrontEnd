<template>
<div class="calendar py-5 px-5">
  <full-calendar :config="config" :events="events" @event-click="eventClick"></full-calendar>
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
      axios.get("http://localhost:8000/checkList")
      .then((response) =>{
        this.events = response.data;
      })
      
  },
  data(){
    return{
     config :{
       defaultView : 'month'
     },
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
