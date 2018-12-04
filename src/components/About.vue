<template>
    <div>
      <b-container id="about_con">
        <b-jumbotron class="my-5 py-0 pt-2" id="about_jum">
          <div class="container">
              <div class="my-4 mx-2 text-center mb-5">
                  <h1>DoTrip project</h1>
              </div>
          </div>
         <div class="container">
             <div class="my-5 mx-2 text-center">
                  <h3>Description</h3>
                  <div class="text-center"><br>
                      <h6>아주대학교 소프트웨어학과 웹시스템설계 5조의 팀 프로젝트입니다. </h6>
                  </div>
              </div>
              <div class="my-4 mx-2 text-center">
                  <h3>Front-end</h3>
                  <div class="row">
                      <div class="col">
                          <i class="xi-emoticon-smiley-o"></i>
                          <h6>찌아니</h6>
                      </div>
                      <div class="col">
                          <i class="xi-emoticon-smiley-o"></i>
                          <h6>미뇽초이</h6>
                      </div>
                  </div>
              </div>
              <div class="my-4 mx-2 text-center">
                  <h3>Back-end</h3>
                  <div class="row">
                      <div class="col">
                          <i class="xi-emoticon-smiley-o"></i>
                          <h6>승배찡</h6>
                      </div>
                      <div class="col">
                          <i class="xi-emoticon-smiley-o"></i>
                          <h6>홍자이</h6>
                      </div>
                  </div>
              </div>
          </div>
        </b-jumbotron>
      </b-container>
    </div>
</template>

<script>
export default {
    name:'About'
}
</script>

<style>
body{
  background : url(./auth/bg2.jpg);
  background-repeat: no-repeat;
  background-size : cover;
}

#about_con {
  width : 70%;
  text-align: center;
}
#about_jum {
  background-color: white;
}

</style>
