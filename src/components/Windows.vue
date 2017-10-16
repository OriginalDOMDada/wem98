<template>
<transition-group name="fade"  tag="div" class="windows">
<div v-for="(app, name) in appData.applications" v-if="app.openApp" v-bind:name="app.text" v-bind:open="app.openApp" v-bind:key="app" v-bind:id="name" class="box-md draggable app resizable">
    <div class="box-header">
        <div class="title-box">
          <div class="subtitle fancy">
          <span><h2>{{app.text}}</h2></span>
          </div>
          <div class="button-section">
            <button v-on:click="app.openApp = false" class="opt red" type="button" name="expand"></button>
            <button v-on:click="fullresize" class="opt green" type="button" name="close"></button>
          </div>
        </div>
      </div>
      <div class="app-content">
        <div v-html="app.content"></div>
      </div>
</div>
</transition-group>
</template>

<script>
  import appData from '../appData.json'
  export default {
    name: 'Windows',
    data () {
      return {
        appData
      }
    }
  }
</script>
