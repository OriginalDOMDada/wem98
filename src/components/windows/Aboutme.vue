<template>
<div style="height: 100vw; width: 100vw; position: relative;">
<transition-group name="fade"  tag="div" class="windows">
<vue-draggable-resizable :h="400" :w="400" v-if="appData.applications.aboutme.openApp" v-bind:name="appData.applications.aboutme.text" v-bind:open="appData.applications.aboutme.openApp" v-bind:key="appData.applications.aboutme" id="aboutme" class="box-md app">
<div class="big-rap">
<div class="box-header">
    <div class="title-box">
      <div class="subtitle fancy">
      <span><h2>{{appData.applications.aboutme.text}}</h2></span>
      </div>
      <div class="button-section">
        <button v-on:click="appData.applications.aboutme.openApp = false" class="opt red" type="button" name="expand"></button>
        <button class="opt green" type="button" name="close"></button>
      </div>
    </div>
  </div>
    <div class="wrappa-da-rappa">
        <div class="app-content" name="aboutme">
          <p>Hello,<br> My name is <a href="www.google.com">William Mannie</a>, I am a magical unicorn that likes to create really cool shit. I currently blaze the streets of Washinton, D.C., where by day I am the official #wintern at nclud, a creative desin agency. To maintain my survial I like eating bomb ass food, taking long trots and, hunting the internet for awesomeness. My areas of expertiese lie within fron-end design/devlopment and illustrating. Check out my portforlio and see what I've been up to lately.</p>
        </div>
      </div>
  </div>
</vue-draggable-resizable>
</transition-group>
</div>
</template>

<script>
import Vue from 'vue'
import VueDraggableResizable from 'vue-draggable-resizable'
import appData from '../../appData.json'
Vue.component('vue-draggable-resizable', VueDraggableResizable)

export default {
  data: function () {
    return {
      appData
    }
  }
}
</script>
