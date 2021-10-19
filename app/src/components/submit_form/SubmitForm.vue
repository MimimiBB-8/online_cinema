<template>
  <div class="wrapper">
    <PageTitle msg='FIND YOUR MOVIE'/>
    <form id="form_search" method="post">
      <p>
        <input
          id="name"
          v-model="name"
          type="text"
          name="name"
          placeholder="Search"
        />
      </p>
      <p>
        <input type="submit" value="SEARCH" />
      </p>
    </form>
    <SearchBy/>
  </div>
</template>

<script>
import PageTitle from '../title/Title.vue'
import SearchBy from '../search_by/SearchBy.vue'
export default {
  name: 'search-module',
  components: {
    PageTitle,
    SearchBy
  }
}
</script>

<style scoped>
.wrapper{
  padding: 40px 136px;
}
#form_search {
  display: flex;
  font-size: 25px;
}
#name{
  font-size: 25px;
  height: 65px;
  width: 790px;
  border:none;
  background: #424242;
  opacity: 20%;
  border-radius: 4px;
  padding-left: 20px;
  margin-right: 15px;
}
input[type=submit]{
  height: 65px;
  width: 265px;
  font-size: 25px;
  text-decoration: toUppercase;
  background-color: #F65261;
  border-radius: 4px;
  border: none;
}
</style>
