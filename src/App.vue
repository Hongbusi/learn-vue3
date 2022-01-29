<template>
  Hello World!
</template>

<script>
import { useTitle } from './hooks/useTitle';

export default {
  setup() {
    const titleRef = useTitle();

    setTimeout(() => {
      titleRef.value = '测试 title';
    }, 3000);
  }
}
</script>
