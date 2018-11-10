<template>
    <nav class="nav">
        <ul class="nav-list">
        <li>
            <router-link to="/">
                <i class="xi-list-ul"></i>
                <span>일정</span>
            </router-link>
        </li>
        <li>
            <router-link to="/calendar">
                <i class="xi-calendar"></i>
                <span>달력</span>
            </router-link>
        </li>
        <li>
            <router-link to="/setting">
                <i class="xi-cog"></i>
                <span>설정</span>
            </router-link>
        </li>
        <li>
        <router-link to="/about">
          <i class="xi-emoticon-smiley"></i>
          <span>소개</span>
        </router-link>
      </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Nav'

}
</script>

<style>

</style>
