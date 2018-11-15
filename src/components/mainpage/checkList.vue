<template>
  <div class="checklist">
    <li>
        <input type="checkbox" class="checklist">                    
        <input type="text" class="checkMain" ><br>
        <input type="textarea" cols="50" rows="20" class="action">
    </li> 
  </div>
</template>

<script>


export default {
  
  name: 'CheckList',
  components: {

  },
  methods:{
      addCheckList(){
          this.isCheck = true;
          this.dot.checkLists.push({
                id : '',
                title : '',
                actions : ''
          })
      }

  },
  
  data(){
    return {

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

