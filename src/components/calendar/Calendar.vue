<template>
<div class="calendar">
  <full-calendar :events="events"></full-calendar>
</div>
 
</template>

<script>
// @ is an alias to /src
import { FullCalendar } from 'vue-full-calendar'
import 'fullcalendar/dist/fullcalendar.css'

export default {
  name: 'Calendar',
  methods: {},
  conputed: {},
  components: {
    FullCalendar,
  },
  data(){
    return{}
  },
  props: {}
}
</script>
