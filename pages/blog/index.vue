<template>
  <section class="container">
    <div class="posts-wrapper">
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
      store.dispatch('posts/fetchPosts', `${process.env.API_URL}/posts?_limit=20`)
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
  display: grid;
  grid-gap: 30px;
  gap: 30px;
}

@media screen and (min-width: 640px) {
  .posts-wrapper {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (min-width: 992px) {
  .posts-wrapper {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media screen and (min-width: 1200px) {
  .posts-wrapper {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
