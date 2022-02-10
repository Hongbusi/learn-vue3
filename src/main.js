import { createApp } from 'vue';
import router from './router';
import App from './App.vue';

import registerDirectives from './directives';

const app = createApp(App);

app.use(router);

registerDirectives(app);

app.mount('#app');
