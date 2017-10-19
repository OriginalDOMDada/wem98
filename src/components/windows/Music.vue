<template>
</template>

<script>
  import appData from '../../appData.json'
  export default {
    name: 'Music',
    data () {
      return {
        appData
      }
    },
    methods: {
      changeSize () {
        this.width = Math.round(Math.random() * 400) + 100
      }
    }
  }
</script>
