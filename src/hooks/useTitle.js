import { ref, watch } from 'vue';

export default function(title = 'Hongbusi') {
  const titleRef = ref(title);

  watch(titleRef, (newTitle) => {
    document.title = newTitle;
  }, {
    immediate: true
  });

  return titleRef;
}
