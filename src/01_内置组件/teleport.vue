<template>
  <button @click="modalOpen = true">
    Open full screen modal!
  </button>

  <div v-if="modalOpen" class="modal">
    <div>
      I'm a modal!
      <button @click="modalOpen = false">
        Close
      </button>
    </div>
  </div>

  <teleport to="body">
    <div v-if="modalOpen" class="modal">
      <div>
        I'm a teleport modal!
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
