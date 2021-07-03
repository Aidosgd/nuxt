<template>
  <div :class="$style.red">{{ message }}</div>
</template>

<script lang="ts">
import usePresenter from './usePresenter'
export default {
  mixins: [usePresenter],
}
</script>

<style module lang="scss">
.red {
  color: red;
}
</style>
