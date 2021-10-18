<template>
  <div class="wraper">
    <Header/>
    <PageTitle msg="FIND YOUR MOVIE"/>
  </div>
</template>

<script>
import Header from './components/header/Header.vue'
import PageTitle from './components/title/Title.vue'

export default {
  name: 'App',
  components: {
    Header,
    PageTitle
  }
}
</script>

<style lang="scss">

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
