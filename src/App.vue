<template>
  <div id="app">
    <PostForm/>
    <div class="block">
      <h1>
        {{numOfPosts}}
      </h1>
    </div>
    <div class="post"
    v-for="post in allPosts"
    :key="post.id"
    >
      <h2>
        {{post.title}}
      </h2>
      <p>
        {{post.body}}
      </p>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import PostForm from './components/PostForm'
export default {
  name: 'app',
  components:{PostForm},
  computed: mapGetters(['allPosts', 'numOfPosts']),
  methods: mapActions(['fetchPosts']),
  async mounted(){
    // this.$store.dispatch('fetchPosts');
    this.fetchPosts();
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  width: 400px;
}
.post{
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem;
}
</style>
