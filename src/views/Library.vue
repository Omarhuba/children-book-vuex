<template>
  <div class="library">
    <nav>
      <router-link
        v-for="book in books"
        :key="book.id"
        :to="'/books/' + book.id"
      >
        <Book :book="book" />
      </router-link>
    </nav>
  </div>
</template>

<script>
import Book from "@/components/Book.vue";
export default {
  name: "LibraryC",
  components: { Book },
  computed: {
    books() {
      return this.$store.state.books;
    },
  },
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
