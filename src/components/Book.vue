<template>
  <div>

    <article class="book" :class="{large}" :style="{background: background}">
        <h3>{{book.title}}</h3>
        <p>{{book.author}}</p>
    </article>
  </div>
</template>

<script>
export default {
    name: 'BookC',
    props:{
        book: Object,
        large: Boolean,
    },
    computed:{
        background(){
            return `radial-gradient(circle at 16% 0% , ${this.book.backgroundColor} 0% , rgba(255, 255, 255,1) 90%)`
        }
    }
}
</script>

<style scoped>
    .book{
        color: black;
        width: 300px;
        height: 420px;
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
    }
    .book link{
        text-decoration: none;

    }
    .book.large{
        margin: 3rem 0 0 15rem;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        width: 480px;
        height: 650px;
    }
</style>