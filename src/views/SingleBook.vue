<template>
  <div>
    <h1>SingleBook</h1>
      <p>{{book}}</p>
      <p>{{$router.params}}</p>
  </div>
</template>

<script>
export default {
  computed:{
    book(){
      return this.$store.state.books.find(book=> book.id == this.$route.params.bookId)
    }
  }
};
</script>

<style></style>
