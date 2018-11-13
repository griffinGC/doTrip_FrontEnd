<template>
<div class="calendar">
  <full-calendar :config="config" :events="events" @day-click="dayClick"></full-calendar>
</div>
 
</template>

<script>
// @ is an alias to /src
import { FullCalendar } from 'vue-full-calendar';
import 'fullcalendar/dist/fullcalendar.css';
import moment from "moment";

export default {
  name: 'Calendar',
  methods: {
    dayClick(date){
      console.log(date);
      let url="./Schedule";
      this.$router.push(url);
    }
  },
  conputed: {},
  components: {
    FullCalendar,
  },
  data(){
    return{
     events: [
        {
            title  : 'event1',
            start  : '2018-11-23',
        },
        {
            title  : 'event2',
            start  : '2018-11-05',
            end    : '2018-11-07',
        },
        {
            title  : 'event3',
            start  : '2018-11-19T12:30:00',
            allDay : false,
        },
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
