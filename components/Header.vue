<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <nuxt-link to="/">
          <img src="~/static/icons/nuxtjs_logo.png" alt="Nuxt" width="158" height="30" />
        </nuxt-link>
      </div>
      <nav class="nav">
        <ul class="menu">
          <li class="menu-item"><nuxt-link to="/blog" class="menu-link">Blog</nuxt-link></li>
          <li class="menu-item"><nuxt-link to="/about" class="menu-link">About</nuxt-link></li>
          <li class="menu-item"><nuxt-link to="/contacts" class="menu-link">Contacts</nuxt-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.header {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.container {
  @apply flex flex-wrap items-center justify-between;
}
.menu {
  @apply flex items-center;
}
.menu-link {
  display: inline-block;
  opacity: 0.5;
  font-weight: 600;
  transition: all 0.3s linear;
}
.menu-link:hover,
.menu-link.nuxt-link-active {
  opacity: 1;
}
.menu li + li {
  margin-left: 15px;
}
</style>
