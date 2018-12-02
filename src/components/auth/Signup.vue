<template>
  <div class="signup">
    <div class="text-center px-3 py-4">
      <h1 class ="pt-4 pb-4">DOTRIP</h1>
      <h3 class="pb-3">SignUp</h3>
      <form class="px-5">
        <div class = "col px-5">
            NAME : <b-form-input  class="my-2" v-model="name" type="text" placeholder="NAME" required></b-form-input>
             ID : <b-form-input class="my-2" v-model="id" type="text" placeholder="ID" required></b-form-input>
            PASSWORD : <b-form-input  class="my-2" v-model="pass" type="password" placeholder="PASSWORD" required></b-form-input>
          <b-button type="submit" class="my-5" variant="primary" v-on:click.prevent="loginSubmit">submit</b-button>
        </div>
      </form>
      <p>
        <router-link to="/">로그인</router-link>
      </p>
      <p>
        테스트값 : {{test}}
      </p>
    </div>
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
</style>
