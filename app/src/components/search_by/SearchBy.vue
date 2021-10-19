<template>
  <div class="wrapper">
    <PageTitle msg='SORT BY'/>
  </div>
</template>

<script>
import PageTitle from '../title/Title.vue'
export default {
  name: 'search-by',
  components: {
    PageTitle
  }
}
</script>

<style scoped>
.wrapper{
  padding: 40px;
}
</style>
