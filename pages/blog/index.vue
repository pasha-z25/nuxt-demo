<template>
  <section class="container">
    <!--    <pre>{{ posts[0] }}</pre>-->
    <div v-if="posts.length" class="py-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <post-card v-for="(post, index) of posts" :key="index" :post="post" />
    </div>
  </section>
</template>

<script>
import PostCard from '@/components/pages-parts/PostCard'
export default {
  components: { PostCard },
  fetch({ store }) {
    if (store.getters['posts/posts'].length === 0) {
      store.dispatch('posts/fetchPosts', `${process.env.API_NUXT}/posts`)
    }
  },
  computed: {
    posts() {
      return this.$store.getters['posts/posts']
    }
  }
}
</script>

<style scoped>
.posts-wrapper {
  grid-gap: 30px;
  gap: 30px;
}
</style>
