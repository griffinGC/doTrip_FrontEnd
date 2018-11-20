<template>
  <div class="signup">
    <h1>DOTRIP</h1>
    <h2>SignUp</h2>
    <form>
      <p>
        <input v-model="name" type="text" placeholder="NAME" min="2" max="8" required>
      </p>
      <p>
        <input v-model="id" type="text" placeholder="ID" min="4" max="12" required>
      </p>
      <p>
        <input v-model="pass" type="password" placeholder="PASSWORD" min="4" max="12" required>
      </p>
      <p>
        <input v-on:click.prevent="loginSubmit" type="submit" value="submit">
      </p>
    </form>
    <p>
      <router-link to="/login">로그인</router-link>
    </p>
    <p>
      테스트값 : {{test}}
    </p>
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
