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
     events: [
        {
            mainCity  :'',
            start  : '',
            end    : '',
            url : ''
        }
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
