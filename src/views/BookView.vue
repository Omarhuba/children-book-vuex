<template>
  <div class="book-view">
    <article>
      <router-link to="/" class="back">Back</router-link>
      <Book v-if="book" :book="book" large/>
      <article v-else>
        Book Not Found!
      </article>
    </article>
    <article class="book-info">
      <p>{{book.plot}}</p>
      <button @click="addToReading">Please Read Me</button>
    </article>
  </div>
</template>


<script>
import Book from '@/components/Book.vue'
export default {
  name: 'BookView',
  components:{Book},
  methods:{
    addToReading(){
      this.$store.dispatch('saveBook', this.book.id)
    }
  },
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
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
   }
  .back{
    margin-left: 15rem ;
    font-size: 1.5rem;
    text-decoration: none;
  }
  .book-info{
    margin-top:  4rem;
    font-size: 1.3rem;
  }
  .book-info p{
    width: 400px;
  }
  .book-info button{
    width: 150px;
    height: 50px;
    background-color: cadetblue;
    font-size: 1.1rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;

  }
</style>
