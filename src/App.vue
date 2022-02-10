<template>
  <div class="content">
    <router-link to="/home" v-slot="props" custom>
      <button>{{ props.href }}</button>
      <button @click="props.navigate">哈哈哈</button>
      <button>{{ props.isActive }}</button>
    </router-link>
    <router-link to="/about">About</router-link>
    <button @click="jumpToAbout">关于</button>

    <router-view v-slot="props">
      <transition name="hbs">
        <keep-alive>
          <component :is="props.Component"></component>
        </keep-alive>
      </transition>
    </router-view>
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
  .hbs-enter-form,
  .hbs-leave-to {
    opacity: 0;
  }

  .hbs-enter-to,
  .hbs-leave-form {
    opacity: 1;
  }

  .hbs-enter-active,
  .hbs-leave-active {
    transition: opacity 1s ease;
  }
</style>
