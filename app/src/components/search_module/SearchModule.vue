<template>
  <div class="wrapper_search_module">
    <PageTitle msg="FIND YOUR MOVIE"/>
    <Search />
    <InputButton />
  </div>
</template>

<script>
import PageTitle from '../title/Title.vue'
import Search from '../input/Search.vue'
import InputButton from '../button/InputButton.vue'

export default {
  name: 'search-module',
  components: {
    PageTitle,
    Search,
    InputButton
  }
}
</script>

<style scoped>
.wrapper_search_module{
  padding: 40px 136px;
}
</style>
