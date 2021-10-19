<template>
    <input v-model="message" placeholder="Search" />
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
h1{
  padding: 40px 136px;
  font-weight: 300;
  font-size: 44px;
  letter-spacing: 4px;
  word-spacing: 3px;
}
</style>
