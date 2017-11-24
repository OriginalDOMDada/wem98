<template>
<div style="height: 100vw; width: 100vw; position: absolute;" v-bind:class="{windowOpen :appData.applications.aboutme.openApp}">
<transition-group name="fade" tag="div" class="windows">
<vue-draggable-resizable :x.sync="x" :y.sync="y" :active="true" :draggable="dragState" @activated="high" :maximize="true" :z.sync="appData.applications.aboutme.z" :parent="parent" :resizing="true" :h="400" :w="400" :minh="400" :minw="400" v-if="appData.applications.aboutme.openApp" v-bind:name="appData.applications.aboutme.text" v-bind:open="appData.applications.aboutme.openApp" v-bind:key="1" id="aboutme" class="box-md app">
<div class="big-rap">
<div class="box-header" @mouseover="dragOn" @mouseleave="dragOff">
    <div class="title-box">
      <div class="subtitle fancy">
      <span><h2>{{appData.applications.aboutme.text}}</h2></span>
      </div>
      <div class="button-section">
        <button v-on:click="appData.applications.aboutme.openApp = false" class="opt red" type="button" name="expand"></button>
        <button class="opt green" type="button" name="fullSize" v-on:click="fullSize" @mouseover="parentOn" @mouseleave="parentOff"></button>
      </div>
    </div>
  </div>
    <div class="wrappa-da-rappa">
        <div class="app-content" name="aboutme">
          <p>Hello,<br> My name is <a @mouseover='mannie' @mouseleave='before' href='#'>William Mannie</a>, I am a magical <a @mouseover='unicorn' @mouseleave='before' href="#">unicorn</a> that likes to <a @mouseover='create' @mouseleave='before' href="#">create</a> really <a @mouseover='cool' @mouseleave='before' href="#">cool</a> <a @mouseover='shit' @mouseleave='before' href="#">shit</a>. I currently <a @mouseover='blaze' @mouseleave='before' href="#">blaze</a> the streets of <a @mouseover='dc' @mouseleave='before' href="#">Washinton, D.C.</a>, where by day I am <a @mouseover='webdev' @mouseleave='before' href="#">web developer</a> at Adfro. To maintain my <a  @mouseover='survival' @mouseleave='before' href="#">survial</a> i eat.. <a @mouseover='alot' @mouseleave='before' href="#">a lot</a>. But in my spare time, i enjoy riding my <a @mouseover='bike' @mouseleave='before' href="#">bike</a> and <a  @mouseover='hunting' @mouseleave='before' href="#">hunting</a> the <a @mouseover='internet' @mouseleave='before' href="#">internet</a> for <a @mouseover='awesomeness' @mouseleave='before' href="#">awesomeness</a>. My areas of expertiese lie within fron-end design/devlopment and illustrating. Check out my site and see what I've been up to <a @mouseover='lately' @mouseleave='before' href="#">lately</a>.</p>
        </div>
      </div>
  </div>
</vue-draggable-resizable>
</transition-group>
</div>
</template>

<script>
import appData from '../../appData.json'

export default {
  data: function () {
    return {
      appData,
      dragState: false,
      parent: false,
      x: 0,
      y: 0
    }
  },
  beforeUpdate () {
    var initalWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    var initalHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    console.log(initalHeight)
    var initalX = (initalWidth / 2) - 200
    var initalY = 50
    var activeApps = document.getElementsByClassName('app')
    var appArray = []
    for (var i = 0; i < activeApps.length; i++) {
      var eachActive = activeApps[i]
      appArray.push(eachActive)
    }
    initalY = 50 + (50 * appArray.length)
    initalX = initalX + (50 * appArray.length)
    console.log(appArray)
    this.x = initalX
    this.y = initalY
  },
  methods: {
    fullSize: function () {
      this.parent = true
      var doubleClickEvent = document.createEvent('MouseEvents')
      doubleClickEvent.initEvent('dblclick', true, true)
      for (var i = 0; i < 1000; i++) {
        this.$el.querySelector('#aboutme').dispatchEvent(doubleClickEvent)
      }
    },
    dragOn: function () {
      this.dragState = true
    },
    dragOff: function () {
      this.dragState = false
    },
    parentOn: function () {
      this.parent = true
    },
    parentOff: function () {
      this.parent = false
    },
    high: function () {
      var activeApps = document.getElementsByClassName('app')
      var initalHi = 200
      var zIndexs = []
      for (var i = 0; i < activeApps.length; i++) {
        var zindex = parseInt(activeApps[i].style.zIndex)
        zIndexs.push(zindex)
      }
      var largest = Math.max.apply(Math, zIndexs)
      if (initalHi <= largest) {
        appData.applications.aboutme.z = largest + 1
      }
    },
    mannie: function () {
      document.getElementsByClassName('panel')['0'].style.WebkitAnimation = 'inherit'
      document.getElementsByClassName('panel')['0'].style.backgroundImage = `url(${require('../../assets/gifs/keef.gif')})`
      document.getElementsByClassName('panel')['0'].style.backgroundSize = 'cover'
    },
    unicorn: function () {
      document.getElementsByClassName('panel')['0'].style.WebkitAnimation = 'inherit'
      document.getElementsByClassName('panel')['0'].style.backgroundImage = `url(${require('../../assets/gifs/unicorn.gif')})`
      document.getElementsByClassName('panel')['0'].style.backgroundSize = 'inital'
    },
    create: function () {
      document.getElementsByClassName('panel')['0'].style.WebkitAnimation = 'inherit'
      document.getElementsByClassName('panel')['0'].style.backgroundImage = `url(${require('../../assets/gifs/lego.gif')})`
      document.getElementsByClassName('panel')['0'].style.backgroundSize = 'cover'
    },
    cool: function () {
      document.getElementsByClassName('panel')['0'].style.WebkitAnimation = 'inherit'
      document.getElementsByClassName('panel')['0'].style.backgroundImage = `url(${require('../../assets/gifs/cool.gif')})`
      document.getElementsByClassName('panel')['0'].style.backgroundSize = 'cover'
    },
    shit: function () {
      document.getElementsByClassName('panel')['0'].style.WebkitAnimation = 'inherit'
      document.getElementsByClassName('panel')['0'].style.backgroundImage = `url(${require('../../assets/gifs/shit.gif')})`
      document.getElementsByClassName('panel')['0'].style.backgroundSize = 'cover'
    },
    blaze: function () {
      document.getElementsByClassName('panel')['0'].style.WebkitAnimation = 'inherit'
      document.getElementsByClassName('panel')['0'].style.backgroundImage = `url(${require('../../assets/gifs/blaze.gif')})`
      document.getElementsByClassName('panel')['0'].style.backgroundSize = 'cover'
    },
    dc: function () {
      document.getElementsByClassName('panel')['0'].style.WebkitAnimation = 'inherit'
      document.getElementsByClassName('panel')['0'].style.backgroundImage = `url(${require('../../assets/gifs/dc.gif')})`
      document.getElementsByClassName('panel')['0'].style.backgroundSize = 'contain'
    },
    webdev: function () {
      document.getElementsByClassName('panel')['0'].style.WebkitAnimation = 'inherit'
      document.getElementsByClassName('panel')['0'].style.backgroundImage = `url(${require('../../assets/gifs/webdev.gif')})`
      document.getElementsByClassName('panel')['0'].style.backgroundSize = 'inital'
    },
    bike: function () {
      document.getElementsByClassName('panel')['0'].style.WebkitAnimation = 'inherit'
      document.getElementsByClassName('panel')['0'].style.backgroundImage = `url(${require('../../assets/gifs/bike.gif')})`
      document.getElementsByClassName('panel')['0'].style.backgroundSize = 'inital'
    },
    survival: function () {
      document.getElementsByClassName('panel')['0'].style.WebkitAnimation = 'inherit'
      document.getElementsByClassName('panel')['0'].style.backgroundImage = `url(${require('../../assets/gifs/survival.gif')})`
      document.getElementsByClassName('panel')['0'].style.backgroundSize = 'cover'
    },
    alot: function () {
      document.getElementsByClassName('panel')['0'].style.WebkitAnimation = 'inherit'
      document.getElementsByClassName('panel')['0'].style.backgroundImage = `url(${require('../../assets/gifs/alot.gif')})`
      document.getElementsByClassName('panel')['0'].style.backgroundSize = 'inital'
    },
    hunting: function () {
      document.getElementsByClassName('panel')['0'].style.WebkitAnimation = 'inherit'
      document.getElementsByClassName('panel')['0'].style.backgroundImage = `url(${require('../../assets/gifs/hunting.gif')})`
      document.getElementsByClassName('panel')['0'].style.backgroundSize = 'cover'
    },
    internet: function () {
      document.getElementsByClassName('panel')['0'].style.WebkitAnimation = 'inherit'
      document.getElementsByClassName('panel')['0'].style.backgroundImage = `url(${require('../../assets/gifs/internet.gif')})`
      document.getElementsByClassName('panel')['0'].style.backgroundSize = 'cover'
    },
    awesomeness: function () {
      document.getElementsByClassName('panel')['0'].style.WebkitAnimation = 'inherit'
      document.getElementsByClassName('panel')['0'].style.backgroundImage = `url(${require('../../assets/gifs/awesomeness.gif')})`
      document.getElementsByClassName('panel')['0'].style.backgroundSize = 'inital'
    },
    lately: function () {
      document.getElementsByClassName('panel')['0'].style.WebkitAnimation = 'inherit'
      document.getElementsByClassName('panel')['0'].style.backgroundImage = `url(${require('../../assets/gifs/lately.gif')})`
      document.getElementsByClassName('panel')['0'].style.backgroundSize = 'cover'
    },
    before: function () {
      document.getElementsByClassName('panel')['0'].style.WebkitAnimation = 'slide 15s linear infinite'
      document.getElementsByClassName('panel')['0'].style.backgroundImage = ''
      document.getElementsByClassName('panel')['0'].style.backgroundSize = ''
    }
  }
}
</script>
