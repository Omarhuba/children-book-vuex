<template>
  <div class="library">
        <router-link to="/readinglist">Reading List</router-link>
    <nav>

        <!-- v-for="book in this.$store.state.books" -->
      <router-link
        v-for="book in this.$store.getters.currentPage"
        :key="book.id"
        :to="'/books/' + book.id"
      >
        <Book :book="book" />
      </router-link>
    </nav>
    <button @click="prev">Previous</button>
    <button @click="next">Next</button>
  </div>
</template>

<script>
import Book from "@/components/Book.vue";
export default {
  name: "LibraryC",
  components: { Book },
  computed: {
    books() {
      // return this.$store.state.books;
      return this.$store.getters.currentPage
    },
  },
  methods:{
    prev(){
      this.$store.commit('previousPage')
    },
    next(){
      this.$store.commit('nextPage')

    },

  },
  mounted(){
    this.$store.dispatch('getBooks')
  }
};
</script>

<style>
  nav{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    padding: 1rem 2rem;
  }
</style>
