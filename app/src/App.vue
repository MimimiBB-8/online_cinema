<template>
  <div class="wraper">
    <Header/>
    <PageTitle msg="FIND YOUR MOVIE"/>
    <div class="search">
      <Search />
      <MyButton/>
    </div>
  </div>
</template>

<script>
import Header from './components/header/Header.vue'
import PageTitle from './components/title/Title.vue'
import Search from './components/input/Search.vue'
import MyButton from './components/button/Button.vue'

export default {
  name: 'App',
  components: {
    Header,
    PageTitle,
    Search,
    MyButton
  }
}
</script>

<style lang="scss">

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
