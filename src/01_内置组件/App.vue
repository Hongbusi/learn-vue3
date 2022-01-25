<template>
  <div style="position: relative;">
    <h3>Tooltips with Vue 3 Teleport</h3>
    <div>
      <modal-button></modal-button>
    </div>
  </div>
</template>

<script>
import ModalButton from './ModalButton.vue';

export default {
  components: {
    ModalButton
  }
}
</script>
