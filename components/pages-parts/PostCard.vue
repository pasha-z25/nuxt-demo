<template>
  <article class="post-card">
    <div class="img-wrap relative bg-no-repeat bg-center bg-cover mb-6" :style="`background-image: url(${post.image})`"></div>
    <!--    <img :src="post.image" :alt="post.title" />-->
    <p class="title">{{ post.title }}</p>
    <p class="intro">{{ post.description.length > 100 ? `${post.description.substring(0, 100)}...` : post.description }}</p>
    <p>{{ new Date(post.updatedAt).toDateString() }}</p>
    <nuxt-link :to="`/blog/${post.slug}`" class="link">{{ $t('btnViewMore') }}</nuxt-link>
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
  @apply flex flex-col p-4 border border-solid border-gray-700;
}
.title {
  @apply text-20/24 font-bold mb-4;
}
.intro {
  @apply mb-6 flex-auto;
}
.link {
  text-decoration: underline;
  color: #146ba3;
  align-self: flex-end;
}
.img-wrap {
  padding-top: 58%;
}
</style>
