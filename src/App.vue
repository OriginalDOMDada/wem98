<template>
    <div id="app">
      <router-view name="header"></router-view>
      <div class="panel">
        <router-view name="appicons"></router-view>
        <router-view name="windows"></router-view>
        <img class="computer-bounce" src="./assets/svg/logo.svg">
      </div>
    </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style type="css" scope>
  @import './main.css';
</style>
