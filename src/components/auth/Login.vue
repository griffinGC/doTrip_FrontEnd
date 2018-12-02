<template>
  <div class="login">
    <h1>DOTRIP</h1>
    <h2>Login</h2>
    <form>
      <p>
        <input v-model="id" type="text" placeholder="ID" minlength="4" maxlegnth="12">
      </p>
      <p>
        <input v-model="pass" type="password" placeholder="PASSWORD" min="4" max="12">
      </p>
      <p>
        <input v-on:click.prevent="loginSubmit" type="submit" value="submit">
      </p>
    </form>
    <p>
      <router-link to="/signup">회원가입</router-link>
    </p>
    <p>
      테스트값 : {{test}}
    </p>
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
              this.$router.push('/')
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
</style>
