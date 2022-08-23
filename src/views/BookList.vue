<template>
  <div>
    <router-link v-for="book in books" :key="book.id" :to="'/books/' + book.id" >
      {{book.title}}
    </router-link>
  </div>
</template>

<script>
export default {
  computed:{
    books(){
      return this.$store.state.books
    }
  }
}
</script>

<style>

</style>