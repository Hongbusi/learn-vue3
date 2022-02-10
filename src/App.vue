<template>
  <div class="content">
    <router-link to="/home">Home</router-link>
    <router-link to="/about">About</router-link>
    <button @click="jumpToAbout">关于</button>
    <router-view></router-view>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();

    const jumpToAbout = () => {
      router.push({
        path: '/about',
        query: {
          name: 'hbs',
          age: 18
        }
      })
    }

    return {
      jumpToAbout
    }
  }
};
</script>

<style>

</style>
