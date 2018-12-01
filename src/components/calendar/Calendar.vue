<template>
<div class="calendar my-3 mx-3">
  <full-calendar :config="config" :events="events" @event-click="eventClick"></full-calendar>
</div>
</template>

<script>
// @ is an alias to /src
import { FullCalendar } from 'vue-full-calendar';
import 'fullcalendar/dist/fullcalendar.css';
// zzimport {mapGetters, mapActions} from 'vuex';

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
  data(){
    return{
     config :{
       defaultView : 'month'
     },
     events: [
        {

            mainCity  : 'BCN',
            start  : '2018-11-23',
            end    : '2018-11-25',
            startDay : '/Calendar/2018-11-23'
            // url : '/Calendar/2018-11-23',
        },
        {
            mainCity  : 'event2',
            start  : '2018-11-05',
            end    : '2018-11-07',
            url : '/Calendar/event2'
        },
        {
            mainCity  : 'event3',
            start  : '2018-11-19',
            end  : '2018-11-24',
            url : '/Calendar/event3'
        },

      ],
      config: {
        defaultView : 'month',
        header: {
          left: 'prev',
          center: 'title',
          right: 'next'
        },
        height : 480
      }
    }
  },
  props: {}
}
</script>
