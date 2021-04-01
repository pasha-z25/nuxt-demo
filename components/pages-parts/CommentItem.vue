<template>
  <div class="comment-item" :class="{ line: index }">
    <p class="head">
      <span class="name">{{ comment.name }}</span>
      <span class="author">{{ comment.email }}</span>
    </p>
    <p class="body">{{ comment.body }}</p>
  </div>
</template>

<script>
export default {
  name: 'CommentItem',
  props: {
    comment: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped>
.comment-item.line {
  padding-top: 0.5rem;
  margin-top: 0.5rem;
  border-top: 1px solid #ccc;
}
.head {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}
.name {
  font-size: 1.1rem;
  font-weight: 500;
}
.author {
  font-size: 0.8rem;
}
</style>
