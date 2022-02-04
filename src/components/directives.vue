<template>
  <input type="text" v-focus>
  <h2 v-format-time>{{ timestamp }}</h2>
</template>

<script>
  export default {
    // 局部指令
    // directives: {
    //   focus: {
    //     mounted(el) {
    //       el.focus();
    //     }
    //   }
    // }
    setup() {
      const timestamp = 1643940356;

      return {
        timestamp
      }
    }
  }
</script>
