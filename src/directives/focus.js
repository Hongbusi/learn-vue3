export default function(app) {
  app.directive('focus', {
    mounted(el) {
      el.focus();
    }
  });
}
