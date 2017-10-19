<template>
    <div id="app">
      <router-view name="header"></router-view>
      <div class="panel">
        <router-view name="appicons"></router-view>
        <div class="windows">
          <router-view name="aboutme"></router-view>
          <router-view name="eightball"></router-view>
          <router-view name="solitare"></router-view>
          <router-view name="skills"></router-view>
          <router-view name="resume"></router-view>
          <router-view name="email"></router-view>
          <router-view name="threedee"></router-view>
          <router-view name="video"></router-view>
          <router-view name="music"></router-view>
        </div>
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
