<template>
  <div class="login text-center px-3 py-4">
    <h1 class ="pt-4 pb-4">DOTRIP</h1>
    <h3 class="pb-3">Login</h3>
    <form class="px-5">
     <div class = "col px-5">
        ID : <b-form-input class="my-2" v-model="id"  type="text" placeholder="ID" ></b-form-input>
        PW : <b-form-input class="my-2" v-model="pass" type="password" placeholder="PASSWORD" ></b-form-input>
        <b-button type="submit" class="my-5" variant="primary" v-on:click.prevent="loginSubmit">submit</b-button>
      </div>
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
</style>
