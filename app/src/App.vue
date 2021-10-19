<template>
  <div class="wraper">
    <div class="cast_header">
      <!-- <div class="wrapper_bcg"></div> -->
      <div class="wrapper_header">
        <Header/>
        <SabmitForm/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/header/Header.vue'
import SabmitForm from './components/submit_form/SubmitForm.vue'

export default {
  name: 'App',
  components: {
    Header,
    SabmitForm
  }
}
</script>

<style>

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.wrapper_bcg{
  background-image: url("https://ic.pics.livejournal.com/algen7/14267851/50254/50254_original.jpg");
  background-size: cover;
  filter: blur(4px);
  -webkit-filter: blur(4px);
  height: 100%;
  left: 0;
  position: fixed;
  right: 0;
  z-index: 1;
  overflow: auto;
}

.wrapper_header {
  background: rgba(0, 0, 0, 0.597);
  left: 0;
  right: 0;
  position: fixed;
  z-index: 2;
}

</style>
