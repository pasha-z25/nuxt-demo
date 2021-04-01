<template>
  <div v-if="preloader" class="lds-dual-ring"></div>
</template>

<script>
export default {
  name: 'Preloader',
  computed: {
    preloader() {
      return this.$store.getters.preloader
    }
  }
}
</script>

<style scoped>
.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
  position: fixed;
  z-index: 3;
  top: 50%;
  left: 50%;
  margin-top: -40px;
  margin-left: -40px;
}
.lds-dual-ring::after {
  content: '';
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border-width: 6px;
  border-style: solid;
  border-color: #146ba3 transparent #146ba3 transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
