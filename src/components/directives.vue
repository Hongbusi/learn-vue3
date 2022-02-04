<template>
  <input type="text" v-focus>
</template>

<script>
  export default {
    // 局部指令
    directives: {
      focus: {
        mounted(el) {
          el.focus();
        }
      }
    }
  }
</script>
