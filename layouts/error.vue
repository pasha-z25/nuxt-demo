<template>
  <section class="container">
    <div class="content-404">
      <img src="@/static/images/man-width-glass.png" alt="man" class="man" />
      <div class="wrap-404">
        <h2 class="title">Что-то тут не так...</h2>
        <div class="number-404">
          <img src="@/static/images/4-1.png" alt="4" />
          <img src="@/static/images/white-egg.png" alt="egg" />
          <img src="@/static/images/4-2.png" alt="4" />
        </div>
        <p class="description">Наверное лучше уйти в более <nuxt-link to="/">надёжное место!</nuxt-link></p>
      </div>
      <img src="@/static/images/three-small-chickens.png" alt="chickens" class="chickens" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'Error',
  layout: 'error'
}
</script>

<style scoped>
a {
  color: #146ba3;
}
.container {
  display: flex;
}
.content-404 {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.content-404 .man {
  align-self: flex-start;
  max-width: 300px;
}
.content-404 .chickens {
  align-self: flex-end;
  max-width: 300px;
}
.number-404 {
  display: flex;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.number-404 img {
  max-height: 200px;
}
.wrap-404 {
  text-align: center;
}
.wrap-404 .title {
  font-size: 3rem;
  font-weight: 700;
  padding-bottom: 2rem;
}
.wrap-404 .description {
  font-size: 1.2rem;
  font-weight: 500;
}
</style>
