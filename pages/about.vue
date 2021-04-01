<template>
  <section class="container">
    <div class="wrapper">
      <h1 class="main-title">{{ $t('textAboutPageTitle') }}</h1>
      <p class="main-description">{{ $t('textMainPageDescription') }}</p>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.wrapper {
  padding-top: 50px;
  padding-bottom: 50px;
  text-align: center;
}
.main-title {
  font-size: 1.3rem;
  font-weight: 500;
  margin-bottom: 1rem;
}
.main-description {
  max-width: 750px;
  margin-left: auto;
  margin-right: auto;
}
</style>
