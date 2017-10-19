<template>
<div style="height: 100vw; width: 100vw; position: relative;">
<transition-group name="fade"  tag="div" class="windows">
<vue-draggable-resizable :h="400" :w="400" v-if="appData.applications.aboutme.openApp" v-bind:name="appData.applications.aboutme.text" v-bind:open="appData.applications.aboutme.openApp" v-bind:key="1" id="aboutme" class="box-md app">
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
          <p>Hello,<br> My name is <a @mouseover='mannie' @mouseleave='before' href='#'>William Mannie</a>, I am a magical <a @mouseover='unicorn' @mouseleave='before' href="#">unicorn</a> that likes to <a @mouseover='create' @mouseleave='before' href="#">create</a> really <a @mouseover='cool' @mouseleave='before' href="#">cool</a> <a @mouseover='shit' @mouseleave='before' href="#">shit</a>. I currently <a @mouseover='blaze' @mouseleave='before' href="#">blaze</a> the streets of <a @mouseover='dc' @mouseleave='before' href="#">Washinton, D.C.</a>, where by day I am <a @mouseover='webdev' @mouseleave='before' href="#">web developer</a> at Adfro. To maintain my <a  @mouseover='survival' @mouseleave='before' href="#">survial</a> i eat.. <a @mouseover='alot' @mouseleave='before' href="#">a lot</a>. But in my spare time, i enjoy riding my <a @mouseover='bike' @mouseleave='before' href="#">bike</a> and <a  @mouseover='hunting' @mouseleave='before' href="#">hunting</a> the <a @mouseover='internet' @mouseleave='before' href="#">internet</a> for <a @mouseover='awesomeness' @mouseleave='before' href="#">awesomeness</a>. My areas of expertiese lie within fron-end design/devlopment and illustrating. Check out my site and see what I've been up to <a @mouseover='lately' @mouseleave='before' href="#">lately</a>.</p>
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
  },
  methods: {
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
