import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

// 全局指令
app.directive('focus', {
  mounted(el) {
    el.focus();
  }
});

app.mount('#app');
