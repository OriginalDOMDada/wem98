<template>
   <div class="my-applications">
      <vue-draggable-resizable :resizable="false" :w="108" :h="126" :z="200" class="application" v-for="(app, name) in appData.applications" :x="app.x" :y="app.y" v-bind:id="name" :key="app.id" :parent="true" :grid="[25,25]">
        <div tabindex="0" class="desktop" @dblclick ="app.openApp = true" >
          <img v-for="(icon, iconName) in icons" v-if="iconName === name" v-bind:src="icon.svg" v-bind:class="app.classname">
          <div class="nest">
            <p>{{app.text}}</p>
          </div>
        </div>
      </vue-draggable-resizable>
   </div>
</template>

<script>
  import appData from '../appData.json'
  export default {
    name: 'AppIcons',
    data () {
      return {
        appData,
        icons: {
          aboutme: {
            svg: require('../assets/svg/icons-01.svg')
          },
          eightball: {
            svg: require('../assets/svg/icons-02.svg')
          },
          solitare: {
            svg: require('../assets/svg/icons-03.svg')
          },
          skills: {
            svg: require('../assets/svg/icons-04.svg')
          },
          resume: {
            svg: require('../assets/svg/icons-05.svg')
          },
          email: {
            svg: require('../assets/svg/icons-06.svg')
          },
          threedee: {
            svg: require('../assets/svg/icons-07.svg')
          },
          video: {
            svg: require('../assets/svg/icons-08.svg')
          },
          music: {
            svg: require('../assets/svg/icons-09.svg')
          }
        }
      }
    }
  }
</script>
