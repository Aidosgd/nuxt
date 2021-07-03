<template>
  <div class="container">
    <Logo />

    <Message />

    <div>
      {{ users.name }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
interface Users {
  name: string
  age: number
}

export default Vue.extend({
  data() {
    const users: Users = { name: 'Aidos', age: 30 }

    return {
      users,
    }
  },
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  padding-top: 100px;
  max-width: 500px;
}
</style>
