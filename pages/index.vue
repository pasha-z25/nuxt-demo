<template>
  <section class="container">
    <div class="wrapper">
      <h1 class="main-title">{{ $t('textMainPageTitle') }}</h1>
      <p class="main-description">{{ $t('textMainPageDescription') }}</p>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

.wrapper {
  padding-top: 100px;
  padding-bottom: 100px;
  text-align: center;
}
.main-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}
.main-description {
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}
</style>
