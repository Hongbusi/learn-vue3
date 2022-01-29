<template>
  Hello World!
</template>

<script>
import { useTitle } from './hooks/useTitle';

export default {
  setup() {
    const titleRef = useTitle();

    setTimeout(() => {
      titleRef.value = 'test';
    }, 3000);
  }
}
</script>
