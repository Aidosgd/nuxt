import Vue from 'vue'

export default Vue.extend({
  data() {
    const message: string = 'string message'
    return {
      message,
    }
  },
  methods: {
    changeText(value: string) {
      this.message = value
    },
  },
})
