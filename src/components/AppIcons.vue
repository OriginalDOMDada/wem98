<template>
   <div class="my-applications">
      <div class="application" v-for="(app, name) in applications" v-draggable v-bind:id="name">
        <div class="desktop" @dblclick ="app.openApp = true">
          <img v-bind:src="app.svg" v-bind:class="app.classname">
          <div class="nest">
            <p>{{app.text}}</p>
          </div>
        </div>
      </div>
   </div>
</template>

<script>
  export default {
    name: 'AppIcons',
    data () {
      return {
        applications: {
          aboutme: {
            svg: require('../assets/svg/icons-01.svg'),
            text: 'Info',
            classname: 'desktop-icon',
            activeState: false,
            openApp: false,
            content: "<p>Hello,<br> My name is William Mannie, I am a magical unicorn that likes to create really cool shit. I currently blaze the streets of Washinton, D.C., where by day I am the official #wintern at nclud, a creative desin agency. To maintain my survial I like eating bomb ass food, taking long trots and, hunting the internet for awesomeness. My areas of expertiese lie within fron-end design/devlopment and illustrating. Check out my portforlio and see what I've been up to lately.<p>"
          },
          eightball: {
            svg: require('../assets/svg/icons-02.svg'),
            text: 'Maybe...',
            classname: 'desktop-icon',
            activeState: false,
            openApp: false,
            content: ''

          },
          solitare: {
            svg: require('../assets/svg/icons-03.svg'),
            text: 'Solitare',
            classname: 'desktop-icon',
            activeState: false,
            openApp: false,
            content: ''
          },
          skills: {
            svg: require('../assets/svg/icons-04.svg'),
            text: 'Skills',
            classname: 'desktop-icon',
            activeState: false,
            openApp: false,
            content: ''
          },
          resume: {
            svg: require('../assets/svg/icons-05.svg'),
            text: 'Resume',
            classname: 'desktop-icon',
            activeState: false,
            openApp: false,
            content: ''
          },
          email: {
            svg: require('../assets/svg/icons-06.svg'),
            text: 'E-Mail',
            classname: 'desktop-icon',
            activeState: false,
            openApp: false,
            content: ''
          },
          threedee: {
            svg: require('../assets/svg/icons-07.svg'),
            text: '3-D',
            classname: 'desktop-icon',
            activeState: false,
            openApp: false,
            content: ''
          },
          video: {
            svg: require('../assets/svg/icons-08.svg'),
            text: 'Video',
            classname: 'desktop-icon',
            activeState: false,
            openApp: false,
            content: "<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://www.youtube.com/embed/0xYkalENxPk?modestbranding=1&autohide=1&showinfo=0&controls=0' frameborder='0' allowfullscreen></iframe></div>"
          },
          music: {
            svg: require('../assets/svg/icons-09.svg'),
            text: 'Music',
            classname: 'desktop-icon',
            activeState: false,
            openApp: false,
            content: ''
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
