<template>
  <div :class="$style.header">
    <div>
      <div :class="$style.left">
        <span :class="$style.logo" />
        <ul>
          <li><a href="">1</a></li>
        </ul>
      </div>
      <div :class="$style.right">
        <div :class="$style.location">location</div>
        <div :class="$style.user">user</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import usePresenter from './usePresenter'
export default {
  mixins: [usePresenter],
}
</script>

<style module lang="scss" src="./styled.scss" />
