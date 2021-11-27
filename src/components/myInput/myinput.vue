<template>
<input :value="modelValue" @input="updateInput"/>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  name: "my-input",
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput (event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>

</style>
