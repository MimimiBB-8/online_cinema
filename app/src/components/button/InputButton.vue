<template>
  <input type='submit' class='button' value='{{label}}'>
</template>

<script>

export default {
  name: 'input-search',
  props: {
    label: {
      type: String
    }
  }
}
</script>

<style scoped>
.button{
}

</style>
