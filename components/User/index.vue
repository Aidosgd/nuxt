<template>
  <div>
    <div :class="$style.green">{{ message }}</div>
    <button @click="changeText(123)">click</button>
  </div>
</template>

<script lang="ts">
import usePresenter from './usePresenter'
export default {
  mixins: [usePresenter],
}
</script>

<style module lang="scss" src="./styled.scss" />
