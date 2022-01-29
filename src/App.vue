<template>
  <div class="content">
    <h1>Hello World!</h1>
    <hr>

    <h2>useDebounceRef</h2>
    <input v-model="message">
    <h2>{{ message }}</h2>
    <hr>

    <h2>useCounter</h2>
    <p>{{ counter }}</p>
    <button @click="decrement">-1</button>
    <button @click="increment">+1</button>

    <div class="scroll">
      <div>scrollX: {{ scrollX }}</div>
      <div>scrollY: {{ scrollY }}</div>
    </div>

    <div class="mouse">
      <div>mouseX: {{ mouseX }}</div>
      <div>mouseY: {{ mouseY }}</div>
    </div>
  </div>
</template>

<script>
import useDebounce from './hooks/useDebounce';
import useCounter from "./hooks/useCounter";
import useTitle from "./hooks/useTitle";
import useScrollPosition from './hooks/useScrollPosition';
import useMousePosition from './hooks/useMousePosition';

export default {
  setup() {
    const message = useDebounce();

    const { counter, increment, decrement } = useCounter();

    const titleRef = useTitle();

    setTimeout(() => {
      titleRef.value = "测试 title";
    }, 3000);

    const { scrollX, scrollY } = useScrollPosition();

    const { mouseX, mouseY } = useMousePosition();

    return {
      message,

      counter,
      increment,
      decrement,

      scrollX,
      scrollY,

      mouseX,
      mouseY
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

.mouse {
  position: fixed;
  right: 30px;
  bottom: 80px;
}
</style>
