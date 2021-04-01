<template>
  <section class="container">
    <div class="post-page py-10">
      <div class="text-center">
        <img :src="post.image" :alt="post.title" class="inline" />
      </div>
      <h1 class="post-title text-center mb-6">{{ post.title }}</h1>
      <div class="flex items-center mb-4">
        <p class="post-body">
          <span class="font-bold">Countries:</span>
          <span v-for="country of post.countries" :key="country" class="country-item">{{ country }}</span>
        </p>
        <p class="post-body"><span class="font-bold">Continent:</span>&nbsp;{{ post.continent }}</p>
        <p class="post-body"><span class="font-bold">Height:</span>&nbsp;{{ post.height }}</p>
      </div>
      <p class="post-body">{{ post.description }}</p>
    </div>
    <!--
    <div v-if="comments.length" class="post-comments">
      <p class="comments-title">{{ $t('textPostComments') }}</p>
      <comment-item v-for="(comment, index) of comments" :key="comment.id" :comment="comment" :index="index" />
    </div>
    -->
  </section>
</template>

<script>
// import CommentItem from '@/components/pages-parts/CommentItem'
export default {
  // components: { CommentItem },
  async asyncData({ $axios, params }) {
    const { data: post } = await $axios.get(`${process.env.API_NUXT}/posts/${params.slug}`)
    // const { data: post } = await $axios.get(`${process.env.API_URL}/posts/${params.id}`)
    // const { data: comments } = await $axios.get(`${process.env.API_URL}/posts/${params.id}/comments`)
    // console.log(post)
    return { post } // , comments
  }
}
</script>

<style scoped>
.post-page {
  padding-top: 3rem;
}
.post-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}
.comments-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 1rem;
}
.country-item + .country-item::before {
  content: ', ';
}
.post-body + .post-body {
  margin-left: 15px;
}
</style>
