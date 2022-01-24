<template>
  <div>
    <h2>{{ firstName }} {{ lastName }}</h2>
    <h2>{{ fullName }}</h2>
    <button @click="changeName">修改</button>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  setup() {
    const firstName = ref('Kobe');
    const lastName = ref('Bryant');

    // 1. 传入一个 getter 函数
    // const fullName = computed(() => `${firstName.value} ${lastName.value}`);

    // 2. 传入一个对象，对象包含 getter/setter
    const fullName = computed({
      get: () => `${firstName.value} ${lastName.value}`,
      set(newValue) {
        const names = newValue.split(' ');
        firstName.value = names[0];
        lastName.value = names[1];
      }
    });


    const changeName = () => {
      fullName.value = 'h bs';
    }

    return {
      fullName,
      changeName
    }
  }
}
</script>
