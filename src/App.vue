<template>
  <div>
    <my-input v-model.number="parson.name"/>
    <button class="button">Add</button>
    <input v-model="input" type="text">
  </div>
</template>

<script>
// import { toRefs } from 'vue'
// import Mydialog from "./components/mydialog/mydialog";
import axios from 'axios'
export default {
  data () {
    return {
      parson: {
        name: ''
      },
      input: ''
    }
  },
  methods: {
   async fechdata () {
      try {
const response = await  axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
        console.log(response)
      } catch (e) {
        console.log(e)
      }
    }
  },
  mounted() {
    this.fechdata()
  },
  watch: {
    input (event)  {
      console.log(event)
    }
  }
}
</script>

<style scoped>
.button {
}
</style>
