<template>
  <div>
    1111
    <hellovueVue></hellovueVue>
    <xxVue></xxVue>
  </div>
   
</template>
<script setup>
import hellovueVue from "./components/hellovue.vue";
import xxVue from "./components/xx.vue";
export default {
  components: {
    HellovueVue,
    XxVue,
  },
};
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
