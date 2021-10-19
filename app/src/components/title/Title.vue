<template>
    <h1>{{ msg }}</h1>
</template>

<script>
export default {
  name: 'page-title',
  props: {
    msg: String
  }
}
</script>

<style scoped>
h1{
  font-weight: 300;
  font-size: 44px;
  letter-spacing: 4px;
  word-spacing: 3px;
  padding-bottom: 45px;
}
</style>
