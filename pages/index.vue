<template>
  <div class="container">
    <Logo />

    <MainMessage />

    <Message />

    <User />

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
