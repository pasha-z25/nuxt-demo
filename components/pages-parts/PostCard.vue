<template>
  <article class="post-card">
    <p class="title">{{ post.title }}</p>
    <p class="intro">{{ post.body.length > 100 ? `${post.body.substring(0, 100)}...` : post.body }}</p>
    <nuxt-link :to="`/blog/${post.id}`" class="link">{{ $t('btnViewMore') }}</nuxt-link>
  </article>
</template>

<script>
export default {
  name: 'PostCard',
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.post-card {
  display: flex;
  flex-direction: column;
  border: 1px solid #2b2b2b;
  padding: 1rem;
}
.title {
  font-size: 1.2rem;
  line-height: 1.2;
  font-weight: 700;
  margin-bottom: 1rem;
}
.intro {
  margin-bottom: 1.5rem;
  flex: 1 1 auto;
}
.link {
  text-decoration: underline;
  color: #146ba3;
  align-self: flex-end;
}
</style>
