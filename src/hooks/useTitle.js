import { ref, watch } from 'vue';

export function useTitle(title = 'Hongbusi') {
  const titleRef = ref(title);

  watch(titleRef, (newTitle) => {
    document.title = newTitle;
  }, {
    immediate: true
  });

  return titleRef;
}
