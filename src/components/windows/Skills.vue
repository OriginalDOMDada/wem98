<template>
<div style="height: 100vw; width: 100vw; position: absolute;" v-bind:class="{windowOpen :appData.applications.skills.openApp}">
<transition-group name="fade" tag="div" class="windows">
<vue-draggable-resizable :x.sync="x" :y.sync="y" :active="true" :draggable="dragState" @activated="high" :maximize="true" :z.sync="appData.applications.skills.z" :parent="parent" :resizing="true" :h="400" :w="400" :minh="400" :minw="400" v-if="appData.applications.skills.openApp" v-bind:name="appData.applications.skills.text" v-bind:open="appData.applications.skills.openApp" v-bind:key="1" id="skills" class="box-md app">
<div class="big-rap">
<div class="box-header" @mouseover="dragOn" @mouseleave="dragOff">
    <div class="title-box">
      <div class="subtitle fancy">
      <span><h2>{{appData.applications.skills.text}}</h2></span>
      </div>
      <div class="button-section">
        <button v-on:click="appData.applications.skills.openApp = false" class="opt red" type="button" name="expand"><svgicon v-on:click="appData.applications.skills.openApp = false" name="close" height="6" width="6" :original="true"></svgicon></button>
        <button class="opt green" type="button" name="fullSize" v-on:click="fullSize" @mouseover="parentOn" @mouseleave="parentOff"><svgicon name="open" height="6" width="6" :original="true" v-on:click="fullSize"></svgicon></button>
      </div>
    </div>
  </div>
    <div class="wrappa-da-rappa">
        <div class="app-content" name="skills">
          <div class="skills-wrapper">
            <p class="skilltitle">William Mannie's Skills</p>
            <div class="daskills">
              <ul>
                <li>Adobe Photoshop</li>
                <li>Adobe Illustrator</li>
                <li>Adobe XD</li>
                <li>Adobe After Effects</li>
                <li>HTML5</li>
                <li>XML</li>
                <ul>
                  <li>SVG's</li>
                </ul>
                <li>CSS</li>
                  <ul>
                    <li>CSS3</li>
                    <li>SASS</li>
                  </ul>
                <li>Javascript</li>
                  <ul>
                    <li>Vue JS</li>
                    <li>Node</li>
                    <li>D3</li>
                    <li>Angular</li>
                    <li>Ajax</li>
                    <li>Api's</li>
                  </ul>
                <li>Php</li>
                  <ul>
                    <li>PHP5</li>
                    <li>Wordpress</li>
                    <li>Drupal 7 & 8</li>
                  </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>
  </div>
</vue-draggable-resizable>
</transition-group>
</div>
</template>

<script>
import appData from '../../appData.json'
import '../../compiled-icons'

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
        this.$el.querySelector('#skills').dispatchEvent(doubleClickEvent)
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
        appData.applications.skills.z = largest + 1
      }
    }
  }
}
</script>
