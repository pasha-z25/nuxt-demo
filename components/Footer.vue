<template>
  <footer class="footer">
    <div class="container">
      <p>{{ currentYear }} &copy; Фсе прафа зашишены. Наверное...</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.footer {
  text-align: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
</style>
