<template>
  <button @click="modalOpen = true">
    Open full screen modal!
  </button>

  <teleport to="body">
    <div v-if="modalOpen" class="modal">
      <div>
        I'm a modal!
        <button @click="modalOpen = false">
          Close
        </button>
      </div>
    </div>
  </teleport>

  <teleport to="body">
    <div v-if="modalOpen" class="modal">
      <div>
        I'm a modal!
        <button @click="modalOpen = false">
          Close
        </button>
      </div>
    </div>
  </teleport>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const modalOpen = ref(false);

    return {
      modalOpen
    }
  }
}
</script>
