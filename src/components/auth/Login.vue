<template>
  <div class="login text-center px-3 py-4">
    <link href="https://fonts.googleapis.com/css?family=Merriweather" rel="stylesheet">
    <!-- <img src="./DoTrip.jpg" class="pb-4 pt-4"> -->
    <div class="title pb-4">DoTrip</div>
    <b-container class="con">
      <b-jumbotron class="jum">
        <!-- <h1 class="pb-1" style="color : #00478e">LOGIN</h1> -->
        <h2><b-alert class="text-left" show variant="primary">LOGIN</b-alert></h2>

        <!-- <h2><b-badge variant="info">LOGIN</b-badge></h2> -->
        <div class="form">
          <form class="px-5">
             <div class = "col px-5">
              ID
              <b-form-input class="my-2" v-model="id"  type="text" placeholder="아이디를 입력해주세요" ></b-form-input>
              PASSWORD
              <b-form-input class="my-2" v-model="pass" type="password" placeholder="비밀번호를 입력해주세요" ></b-form-input>
              <b-button type="submit" class="my-3" variant="primary" v-on:click.prevent="loginSubmit">LOGIN</b-button>
              &nbsp;&nbsp;
              <b-button to="/signup" class="my-3" variant="success">SIGNUP</b-button>
            </div>
          </form>
        </div>
      </b-jumbotron>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      test: {},
      id : this.id,
      pass : this.pass,
      validate : '',
    }
  },
  methods : {
    loginSubmit : function(){
      this.formVal();
      if(this.validate.length != 0){
        this.validate += "를 입력해 주세요!";
        alert(this.validate);
      }

      else{
        this.$http.post('/api/auth/login',{
            id : this.id,
            pass : this.pass,
          }).then((response) =>{
            if(response.data.success){
              console.log(response);
              this.$router.push('Plan')
            }
            else{
              this.test = response.data;
              alert('로그인 실패');
            }
          })
      }
    },
    formVal : function(){
      this.validate = '';
      if(!this.id) this.validate += 'ID ';
      if(!this.pass) this.validate += 'PASSWORD ';
    }
  }
}
</script>

<style lang="css">

.title {
    color:white;
    font-size: 90px;
    padding: 5px 0 0 0;
    /* text-align: center; */
    font-weight : 700;
    font-family: 'Merriweather', serif;

}

img{
  max-width: 80%;
  width:300px
}
body{
  background : url(./bg2.jpg);
	background-repeat: no-repeat;
	background-size : cover;
}
.con {
  max-width : 40%;
}
.jum{
  background-color: #edfcff;
  /* border-radius: 18px; */
  padding : 0;
}
.form {
  text-align : left;

}
</style>
