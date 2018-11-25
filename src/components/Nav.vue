<template>
    <nav>
        <ul class="nav row">
            <ul class="nav-item col">
                <router-link to="/">
                    <i class="xi-list-ul"></i>
                    <span>일정</span>
                </router-link>
            </ul>
            <ul class=" nav-item col">
                <router-link to="/calendar">
                    <i class="xi-calendar"></i>
                    <span>달력</span>
                </router-link>
            </ul>
            <ul class="nav-item col">
                <router-link to="/setting">
                    <i class="xi-cog"></i>
                    <span>설정</span>
                </router-link>
            </ul>
            <ul class="nav-item col">
                <router-link to="/about">
                <i class="xi-emoticon-smiley"></i>
                <span>소개</span>
                </router-link>
            </ul>
        </ul>
    </nav>
</template>

<script>

export default {
    name: 'Nav'

}
</script>

<style >

 .nav {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: 100;
    background: #fff;
    opacity: 0.8;
    border-top: 1px solid #f8f9fa;
    display: block;
}
.nav-item {
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
