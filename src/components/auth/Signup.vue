<template>
  <div class="signup">
      <link href="https://fonts.googleapis.com/css?family=Merriweather" rel="stylesheet">
    <div class="title pb-3">DoTrip</div>
    <b-container class="con">
      <b-jumbotron class="jum">
        <h2><b-alert class="text-left"show variant="success">SIGNUP</b-alert></h2>
        <div class="form">
          <form class="px-5">
            <div class = "col px-5">
              NAME <b-form-input  class="my-2" v-model="name" type="text" placeholder="이름을 입력해 주세요" required></b-form-input>
              ID <b-form-input class="my-2" v-model="id" type="text" placeholder="아이디를 입력해 주세요" required></b-form-input>
              PASSWORD <b-form-input  class="my-2" v-model="pass" type="password" placeholder="비밀번호를 입력해 주세요" required></b-form-input>
              <b-button type="submit" class="my-3" variant="primary" v-on:click.prevent="loginSubmit">SIGNUP</b-button>
              &nbsp;&nbsp;
              <b-button to="/login" class="my-3" variant="success">LOGIN</b-button>
            </div>
          </form>
        </div>
      </b-jumbotron>
    </b-container>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  data () {
    return {
      test: {},
      name : this.name,
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
        this.$http.post('/api/auth/signup',{
            name : this.name,
            id : this.id,
            pass : this.pass,
          }).then((response) =>{
            if(response.data.success){
              console.log(response);
              alert('회원가입 성공!')
              this.$router.push('Login')
            }
            else{
              this.test = response.data;
              alert('회원가입 실패!');
            }
          })
      }
    },
    formVal : function(){
      this.validate = '';
      if(!this.name) this.validate += 'NAME ';
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
    text-align: center;
    font-weight : 700;
    font-family: 'Merriweather', serif;
}
body{
  background : url(./bg2.jpg);
	background-repeat: no-repeat;
	background-size : cover;
}
.con {
  max-width : 40%;
  text-align: center;
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
