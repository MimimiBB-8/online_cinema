<template>
    <input type='search' class="search_input" v-model="message" placeholder="Search" />
</template>

<script>
export default {
  name: 'search',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.search_input{
  height: 65px;
  width: 810px;
  font-size: 25px;
  border: none;
  background: #424242;
  opacity: 20%;
  padding: 20px 20px;
  border-radius: 4px;
}
</style>
