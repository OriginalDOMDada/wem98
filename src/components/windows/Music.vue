<template>
  <div style="height: 100vw; width: 100vw; position: absolute;" v-bind:class="{windowOpen :appData.applications.music.openApp}">
  <transition-group name="fade" tag="div" class="windows">
  <vue-draggable-resizable :z="300" :parent="true" :maximize="true" :resizing="true" :h="400" :w="400" :minh="400" :minw="400" v-if="appData.applications.music.openApp" v-bind:name="appData.applications.music.text" v-bind:open="appData.applications.music.openApp" v-bind:key="1" id="music" class="box-md app">
  <div class="big-rap">
  <div class="box-header">
      <div class="title-box">
        <div class="subtitle fancy">
        <span><h2>{{appData.applications.music.text}}</h2></span>
        </div>
        <div class="button-section">
          <button v-on:click="appData.applications.music.openApp = false" class="opt red" type="button" name="expand"></button>
          <button class="opt green" type="button" name="fullSize" v-on:click="fullSize"></button>
        </div>
      </div>
    </div>
      <div class="wrappa-da-rappa">
          <div class="app-content" name="music">
            <div id="SC-playa">
              <div class="button-wrapper">
                <div class="prebee">
                  <p>{{ song }}</p>
                  <button class="play" v-on:click="playSound">Play</button>
                  <button class="pause" v-on:click="pauseSound">Pause</button>
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
  import SC from 'soundcloud'
  import appData from '../../appData.json'

  export default {
    name: 'Music',
    data () {
      return {
        appData,
        is_playing: false,
        player: '',
        song: {
          title: [],
          artist: [],
          id: [],
          duration: []
        },
        index: 0,
        currentSong: 0
      }
    },
    mounted () {
      SC.initialize({
        client_id: 'a985b2097bc3b0192d24975686095d1f'
      })
      SC.get('/playlists/376667462').then(function (playlist) {
        playlist.forEach(function (track) {
          console.log(track.title)
          this.song.id[this.index] = track.id
          console.log(track.title)
          this.song.title[this.index] = track.title
          this.song.artist[this.index] = track.user.username
          this.song.duration[this.index] = track.duration
          console.log(track.duration)
          this.index++
        })
      })
    },
    methods: {
      fullSize: function () {
        var doubleClickEvent = document.createEvent('MouseEvents')
        doubleClickEvent.initEvent('dblclick', true, true)
        for (var i = 0; i < 900; i++) {
          this.$el.querySelector('#aboutme').dispatchEvent(doubleClickEvent)
        }
      },
      playSound: function () {
        this.player.then(function (player) {
          player.play()
        })
      },
      pauseSound: function () {
        this.player.then(function (player) {
          player.pause()
        })
      }
    }
  }
</script>
