<template>
  <div class="content">
    <h1>Hello World!</h1>
    <hr>

    <h2>useDebounce</h2>
    <input v-model="message">
    <h2>{{ message }}</h2>
    <hr>

    <h2>useCounter</h2>
    <p>{{ counter }}</p>
    <button @click="decrement">-1</button>
    <button @click="increment">+1</button>
    <hr>

    <h2>useLocalStorage</h2>
    <button @click="clickEdit">修改</button>

    <div class="scroll">
      <div>scrollX: {{ scrollX }}</div>
      <div>scrollY: {{ scrollY }}</div>
    </div>

    <div class="mouse">
      <div>mouseX: {{ mouseX }}</div>
      <div>mouseY: {{ mouseY }}</div>
    </div>
    <hr>

    <h2>directives</h2>
    <directives />
  </div>
</template>

<script>
import useDebounce from '../hooks/useDebounce';
import useCounter from "../hooks/useCounter";
import useTitle from "../hooks/useTitle";
import useScrollPosition from '../hooks/useScrollPosition';
import useMousePosition from '../hooks/useMousePosition';
import useLocalStorage from '../hooks/useLocalStorage';

import directives from '../components/directives.vue';

export default {
  components: {
    directives
  },

  setup() {
    const message = useDebounce();

    const { counter, increment, decrement } = useCounter();

    const titleRef = useTitle();

    setTimeout(() => {
      titleRef.value = "测试 title";
    }, 3000);

    const { scrollX, scrollY } = useScrollPosition();

    const { mouseX, mouseY } = useMousePosition();

    const data = useLocalStorage('name', 'hbs');

    const clickEdit = () => {
      data.value = 'Hongbusi';
    }

    return {
      message,

      counter,
      increment,
      decrement,

      scrollX,
      scrollY,

      mouseX,
      mouseY,

      clickEdit
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
