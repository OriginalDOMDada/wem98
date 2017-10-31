<template>
<div style="height: 100vw; width: 100vw; position: absolute;" v-bind:class="{windowOpen :appData.applications.solitare.openApp}">
<transition-group name="fade"  tag="div" class="windows">
<vue-draggable-resizable :h="400" :w="400" v-if="appData.applications.solitare.openApp" v-bind:name="appData.applications.solitare.text" v-bind:open="appData.applications.solitare.openApp" v-bind:key="1" id="solitare" class="box-md app">
<div class="big-rap">
<div class="box-header">
    <div class="title-box">
      <div class="subtitle fancy">
      <span><h2>{{appData.applications.solitare.text}}</h2></span>
      </div>
      <div class="button-section">
        <button v-on:click="appData.applications.solitare.openApp = false" class="opt red" type="button" name="expand"></button>
        <button class="opt green" type="button" name="close"></button>
      </div>
    </div>
  </div>
    <div class="wrappa-da-rappa">
        <div class="app-content viewport" name="solitare">
          {{SolitaireWin}}
        </div>
      </div>
  </div>
</vue-draggable-resizable>
</transition-group>
</div>
</template>

<script>
  import SolitaireWin from 'solitairewin'
  import appData from '../../appData.json'

  export default {
    components: { SolitaireWin },
    name: 'Solitare',
    data () {
      return {
        appData,
        SolitaireWin
      }
    },
    methods: {
      ready () {
        console.log('yi')
        var win = new SolitaireWin({
          viewport: document.querySelector('.viewport'),
          path: 'static/',
          images: [
            'dither.png',
            'ineedpage.jpg',
            'LupaCapitolina.png',
            '3dcat.png',
            'cool.gif',
            'horse.gif',
            'f.gif'
          ],
          resize: true
        })
        win.load(function () {
          console.log('yi')
          win.start()
        })
      }
    }
  }
</script>
