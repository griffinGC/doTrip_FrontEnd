<template>
    <nav>
        <ul class="go row">
            <ul class="go-item col">
                <router-link to="/Plan">
                    <i class="xi-list-ul"></i>
                    <span>일정</span>
                </router-link>
            </ul>
            <ul class=" go-item col">
                <router-link to="/calendar">
                    <i class="xi-calendar"></i>
                    <span>달력</span>
                </router-link>
            </ul>
            <ul class="go-item col">
                <router-link to="/about">
                <i class="xi-emoticon-smiley"></i>
                <span>소개</span>
                </router-link>
            </ul>
            <ul class="go-item col" v-on:click.prevent="logoutSubmit">
                <router-link to="/logout">
                    <i class="xi-tab"></i>
                    <span>로그아웃</span>
                </router-link>
            </ul>
        </ul>
    </nav>
</template>

<script>

export default {
    name: 'Nav',
    methods:{
        logoutSubmit(){
            this.$http.get('/api/auth/logout',{
                id : this.id,
                pass : this.pass,
            }).then((response) =>{
                console.log(response);
                alert('로그아웃 성공!');
            })
        }
    }
}
</script>

<style >

 .go {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: 100;
    background: #fff;
    opacity: 0.8;
    border-top: 1px solid zzzz;
    display: block;
    /* color:#17a2b8; */
}
.go-item {
    width: 25%;
    float: left;
    text-align: center;
    margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
    font-family: 'Open Sans', sans-serif;
    list-style: none;
}
span {
    display: block;
    font-size: 11px;
    padding: 5px 0 0 0;
    text-align: center;
} 

</style>
