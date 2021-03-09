<template>
  <div class="main-wrapper">
    <app-header />
    <main class="content">
      <Nuxt />
    </main>
    <app-footer />
    <preloader />
  </div>
</template>

<script>
import AppHeader from '@/components/Header'
import AppFooter from '@/components/Footer'
import Preloader from '@/components/Preloader'
export default {
  components: {
    AppHeader,
    AppFooter,
    Preloader
  }
}
</script>

<style scoped>
.main-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.content {
  display: flex;
  flex: 1 1 auto;
}
</style>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
::before,
::after {
  box-sizing: inherit;
}
.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

@media screen and (min-width: 992px) {
  .container {
    max-width: 80%;
  }
}
</style>
