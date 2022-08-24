<template>
  <div class="book-view">
    <router-link to="/" class="back">Back</router-link>
    <Book v-if="book" :book="book" large/>
    <article v-else>
      Book Not Found!
    </article>
  </div>
</template>


<script>
import Book from '@/components/Book.vue'
export default {
  name: 'BookView',
  components:{Book},
  computed:{
    book(){
      for(let book of this.$store.state.books){
        if(book.id == this.$route.params.id){
          return book
        }
      }
      return null
    }
    // book(){
    //   return this.$store.state.books.find(book=> book.id == this.$route.params.bookId)
    // },
    
  },

};
</script>

<style scoped style:{scss}>
  .book-view{

   }
    .back{
      margin-left: 15rem ;
      font-size: 1.5rem;
      text-decoration: none;
    }
</style>
