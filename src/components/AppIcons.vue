<template>
   <div class="my-applications">
      <div class="application" v-for="(app, name) in appData.applications" v-draggable v-bind:id="name">
        <div class="desktop" @dblclick ="app.openApp = true">
          <img v-for="(icon, iconName) in icons" v-if="iconName === name" v-bind:src="icon.svg" v-bind:class="app.classname">
          <div class="nest">
            <p>{{app.text}}</p>
          </div>
        </div>
      </div>
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
    },
    directives: {
      draggable: {
        bind: function (el) {
          el.style.position = 'absolute'
          var startX, startY, initialMouseX, initialMouseY
          function mousemove (e) {
            var dx = e.clientX - initialMouseX
            var dy = e.clientY - initialMouseY
            el.style.top = startY + dy + 'px'
            el.style.left = startX + dx + 'px'
            return false
          }
          function mouseup () {
            document.removeEventListener('mousemove', mousemove)
            document.removeEventListener('mouseup', mouseup)
          }
          el.addEventListener('mousedown', function (e) {
            startX = el.offsetLeft
            startY = el.offsetTop
            initialMouseX = e.clientX
            initialMouseY = e.clientY
            document.addEventListener('mousemove', mousemove)
            document.addEventListener('mouseup', mouseup)
            return false
          })
        }
      }
    }
  }
</script>
