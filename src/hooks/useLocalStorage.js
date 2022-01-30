import { ref, useAttrs, watch } from 'vue';

export default function useLocalStorage(key, value) {
  const data = ref(value);

  if (value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  } else {
    data.value = JSON.parse(window.localStorage.getItem(key));
  }

  watch(data, (newData) => {
    window.localStorage.setItem(key, JSON.stringify(newData));
  });
  return data;
}
