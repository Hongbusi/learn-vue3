<template>
  <div>
    <input v-model="message">
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
import debounceRef from './hook/useDebounceRef';

export default {
  setup() {
    const message = debounceRef('Hello World', 100);

    return {
      message
    }
  }
}
</script>
