<template>
  <div style="height: 100vw; width: 100vw; position: absolute;" v-bind:class="{windowOpen :appData.applications.music.openApp}">
  <transition-group name="fade" tag="div" class="windows">
  <vue-draggable-resizable :x.sync="x" :y.sync="y" :active="true" :draggable="dragState" @activated="high" :maximize="true" :z.sync="appData.applications.music.z" :parent="parent" :resizing="true" :h="400" :w="400" :minh="400" :minw="400" v-if="appData.applications.music.openApp" v-bind:name="appData.applications.music.text" v-bind:open="appData.applications.music.openApp" v-bind:key="1" id="music" class="box-md app">
  <div class="big-rap">
  <div class="box-header" @mouseover="dragOn" @mouseleave="dragOff">
      <div class="title-box">
        <div class="subtitle fancy">
        <span><h2>{{appData.applications.music.text}}</h2></span>
        </div>
        <div class="button-section">
        <button v-on:click="appData.applications.music.openApp = false" class="opt red" type="button" name="expand"><svgicon v-on:click="appData.applications.music.openApp = false" name="close" height="6" width="6" :original="true"></svgicon></button>
        <button class="opt green" type="button" name="fullSize" v-on:click="fullSize" @mouseover="parentOn" @mouseleave="parentOff"><svgicon name="open" height="6" width="6" :original="true" v-on:click="fullSize"></svgicon></button>
        </div>
      </div>
    </div>
      <div class="wrappa-da-rappa">
          <div class="app-content" name="music">
            <div class="ui container">
              <div class="ui left floated segment">
                <div id="loader" class="ui active inverted dimmer">
                  <div class="ui text loader">Loading</div>
                </div>
                <iframe id="soundcloud" width="100%" height="300" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/376667462&amp;auto_play=false&amp;hide_related=false&amp;show_comments=false&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
                <div id="controls">
                  <div class="ui icon buttons">
                    <button id="back-button" class="ui button">
                      <i class="fast backward icon"></i>
                    </button>
                    <button id="play-button" class="ui button">
                      <i class="play icon"></i>
                    </button>
                    <button id="forward-button" class="ui button">
                      <i class="fast forward icon"></i>
                    </button>
                  </div>
                  <div class="ui icon buttons">
                    <button id="mute-button" class="ui button">
                      <i class="mute icon"></i>
                    </button>
                  </div>
                </div>
                <br>
                <div id="progress-container" class="ui small orange progress">
                  <div id="progress-bar" class="bar"></div>
                </div>
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
  import SoundcloudWidget from 'soundcloud-widget'

  export default {
    name: 'Music',
    data () {
      return {
        appData,
        dragState: false,
        parent: false,
        x: 0,
        y: 0
      }
    },
    updated () {
      var widget = new SoundcloudWidget('soundcloud')
      var playBtn = document.getElementById('play-button')
      var playIcon = playBtn.querySelector('i')

      var muteBtn = document.getElementById('mute-button')
      var muteIcon = muteBtn.querySelector('i')

      var backBtn = document.getElementById('back-button')
      var forwardBtn = document.getElementById('forward-button')
      var progressContainer = document.getElementById('progress-container')
      var progressBar = document.getElementById('progress-bar')

      widget.on(SoundcloudWidget.events.PLAY, function () {
        playIcon.classList.add('pause')
        playIcon.classList.remove('play')
      })

      widget.on(SoundcloudWidget.events.PAUSE, function () {
        playIcon.classList.add('play')
        playIcon.classList.remove('pause')
      })

      widget.on(SoundcloudWidget.events.PLAY_PROGRESS, function (progress) {
        var maxWidth = progressContainer.offsetWidth
        var position = progress.relativePosition
        var newWidth = Math.floor(maxWidth * position)

        progressBar.style.width = newWidth + 'px'
      })

      muteBtn.addEventListener('click', function () {
        widget.getVolume().then(function (volume) {
          if (volume > 0) {
            widget.setVolume(0)
            muteIcon.classList.remove('mute')
            muteIcon.classList.add('unmute')
          } else {
            widget.setVolume(100)
            muteIcon.classList.add('mute')
            muteIcon.classList.remove('unmute')
          }
        })
      })

      playBtn.addEventListener('click', function () {
        widget.toggle()
      })

      forwardBtn.addEventListener('click', function () {
        widget.seekTo(0)
        widget.next()
      })

      backBtn.addEventListener('click', function () {
        widget.seekTo(0)
        widget.prev()
      })

      progressContainer.addEventListener('click', function (event) {
        var el = progressContainer
        var width = el.offsetWidth
        var rect = el.getBoundingClientRect()
        var position = event.clientX - rect.left + document.body.scrollLeft
        var percent = position / width

        widget.getDuration().then(function (duration) {
          var newPosition = Math.floor(duration * percent)

          widget.seekTo(newPosition)
        })
      })

      widget.on(SoundcloudWidget.events.READY, function () {
        var container = document.getElementById('loader')
        container.classList.remove('active')
      })
    },
    beforeUpdate () {
      var initalWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
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
      this.x = initalX
      this.y = initalY
    },
    methods: {
      fullSize: function () {
        this.parent = true
        var doubleClickEvent = document.createEvent('MouseEvents')
        doubleClickEvent.initEvent('dblclick', true, true)
        for (var i = 0; i < 1000; i++) {
          this.$el.querySelector('#music').dispatchEvent(doubleClickEvent)
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
          appData.applications.music.z = largest + 1
        }
      }
    }
  }
</script>


<style>
  .ui.container {
    margin-top: 25px;
  }
  .ui.progress .bar {
    min-width: 2px;
  }
  .ui.segment {
    min-width: 400px;
    max-width: 65%;
  }
</style>
