<template>
  <div class="checklist">
    <input type="checkbox">                    
    <input type="text" ><br>
    <input type="textarea" cols="50" rows="20" >
  </div>
</template>

<script>


export default {
  
  name: 'CheckList',
  components: {

  },
  methods:{

  },
  
  data(){
    return {
        checkLists:[

        ]
    }
  }
}
</script>



<style>
span{
    padding : 3%;
}
.mainCity{
    width: 20%
}
.inCity , .outCity{
    width : 5%
}

i{
    padding: 20px;
}

</style>

