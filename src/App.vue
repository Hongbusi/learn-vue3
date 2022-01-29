<template>
  <h1>Hello World!</h1>
  <hr>
  <h2>useCounter</h2>
  <p>{{ counter }}</p>
  <button @click="decrement">-1</button>
  <button @click="increment">+1</button>
</template>

<script>
import { useCounter } from './hooks/useCounter';
import { useTitle } from './hooks/useTitle';

export default {
  setup() {
    const { counter, increment, decrement } = useCounter();

    const titleRef = useTitle();

    setTimeout(() => {
      titleRef.value = '测试 title';
    }, 3000);

    return {
      counter,
      increment,
      decrement
    }
  }
}
</script>
