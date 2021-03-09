<template>
  <section class="container">
    <div class="post-page">
      <h1 class="post-title">{{ post.title }}</h1>
      <p class="post-body">{{ post.body }}</p>
    </div>
    <div v-if="comments.length" class="post-comments">
      <p class="comments-title">{{ $t('textPostComments') }}</p>
      <comment-item v-for="(comment, index) of comments" :key="comment.id" :comment="comment" :index="index" />
    </div>
  </section>
</template>

<script>
import CommentItem from '@/components/pages-parts/CommentItem'
export default {
  components: { CommentItem },
  async asyncData({ $axios, params }) {
    const { data: post } = await $axios.get(`${process.env.API_URL}/posts/${params.id}`)
    const { data: comments } = await $axios.get(`${process.env.API_URL}/posts/${params.id}/comments`)
    return { post, comments }
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
</style>
