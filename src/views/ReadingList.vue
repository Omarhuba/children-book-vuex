<template>
  <div class="reading-list">
    <router-link to="/">Back</router-link>
    <ul>
        <li v-for="book in readingList" :key="book.id">
            {{book.title}} || {{book.author}}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
name: 'ReadingList',
computed:{
    readingList(){
        return this.$store.getters.readingList
    }
}
}
</script>

<style>

</style>