<template>
<div style="height: 100vw; width: 100vw; position: absolute;" v-bind:class="{windowOpen :appData.applications.solitare.openApp}">
<transition-group name="fade"  tag="div" class="windows">
<vue-draggable-resizable :h="400" :w="400" v-if="appData.applications.solitare.openApp" v-bind:name="appData.applications.solitare.text" v-bind:open="appData.applications.solitare.openApp" v-bind:key="1" id="solitare" class="box-md app" v-on:resizing="onResize">
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
          <div class="button-wrapper">
            <div class="prebee">
              <button class="throwsum" v-on:click="throwsum">Throw Some</button>
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
  import SolitaireWin from 'solitairewin'
  import appData from '../../appData.json'

  export default {
    components: { SolitaireWin },
    name: 'Solitare',
    data () {
      return {
        appData
      }
    },
    methods: {
      throwsum: function (event) {
        var win = new SolitaireWin({
          viewport: document.querySelector('.viewport'),
          path: 'static/cards/',
          images: [
            'AC.svg',
            'AD.svg',
            'AH.svg',
            'AS.svg',
            'JC.svg',
            'JD.svg',
            'JH.svg',
            'JS.svg',
            'KC.svg',
            'KD.svg',
            'KH.svg',
            'KS.svg',
            'QC.svg',
            'QD.svg',
            'QH.svg',
            'QS.svg'
          ],
          resize: true
        })
        win.load(function () {
          win.start()
        })
      },
      onResize: function (x, y, width, height) {
        var hasCanvas = document.getElementsByClassName('sw-canvas')
        if (typeof (hasCanvas) !== 'undefined' && hasCanvas !== null) {
          if (this.$el.getElementsByClassName('sw-canvas').length > 0) {
            var resizeEvent = window.document.createEvent('UIEvents')
            resizeEvent.initUIEvent('resize', true, false, window, 0)
            window.dispatchEvent(resizeEvent)
          }
        }
      }
    }
  }
</script>
