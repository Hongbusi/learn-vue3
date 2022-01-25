<template>
  <div>
    <h2>{{ obj.count }}</h2>
    <button @click="decrement">-1</button>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  setup() {
    const obj = reactive({ count: 0 });

    const decrement = () => {
      obj.count--;
    }

    const increment = () => {
      obj.count++;
    }

    return {
      obj,
      decrement,
      increment
    }
  }
}
</script>

<style scoped>

</style>
