<template>
  <div class="content">
    <h1>Hello World!</h1>
    <hr />
    <h2>useCounter</h2>
    <p>{{ counter }}</p>
    <button @click="decrement">-1</button>
    <button @click="increment">+1</button>

    <div class="scroll">
      <div class="scroll-x">scrollX: {{ scrollX }}</div>
      <div class="scroll-y">scrollY: {{ scrollY }}</div>
    </div>
  </div>
</template>

<script>
import useCounter from "./hooks/useCounter";
import useTitle from "./hooks/useTitle";
import useScrollPosition from './hooks/useScrollPosition';

export default {
  setup() {
    const { counter, increment, decrement } = useCounter();

    const titleRef = useTitle();

    setTimeout(() => {
      titleRef.value = "测试 title";
    }, 3000);

    const { scrollX, scrollY } = useScrollPosition();

    return {
      counter,
      increment,
      decrement,
      scrollX,
      scrollY
    };
  }
};
</script>

<style>
.content {
  width: 3000px;
  height: 5000px;
}

.scroll {
  position: fixed;
  right: 30px;
  bottom: 30px;
}
</style>
