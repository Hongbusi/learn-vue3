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
import router from './router';

export default {
  setup() {
    const router = useRouter();

    const jumpToAbout = () => {
      router.push('/about')
    }

    return {
      jumpToAbout
    }
  }
};
</script>

<style>

</style>
