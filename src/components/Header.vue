<template>
<div class='header'>
  <img class='top-logo' v-bind:src='topLogo' alt=''>
  <div class='dropdown one'>
    <button v-on:click='expand' class='dropbtn'>William Mannie</button>
    <div id='myDropdown' class='dropdown-content' style="display:none;">
      <a href='#'>Link 1</a>
      <a href='#'>Link 2</a>
      <a href='#'>Link 3</a>
    </div>
  </div>
  <div class='dropdown'>
    <button v-on:click='expand' class='dropbtn' id='file'>File</button>
    <div id='myDropdown' class='dropdown-content' style="display:none;">
      <a href='#'>Link 1</a>
      <a href='#'>Link 2</a>
      <a href='#'>Link 3</a>
    </div>
  </div>
  <div class='dropdown'>
    <button v-on:click='expand' class='dropbtn' id='view'>View</button>
    <div id='myDropdown' class='dropdown-content' style="display:none;">
      <a href='#'>Link 1</a>
      <a href='#'>Link 2</a>
      <a href='#'>Link 3</a>
    </div>
  </div>
  <div class='dropdown'>
    <button v-on:click='expand' class='dropbtn' id='window'>Window</button>
    <div id='myDropdown' class='dropdown-content' style="display:none;">
      <a href='#'>Link 1</a>
      <a href='#'>Link 2</a>
      <a href='#'>Link 3</a>
    </div>
  </div>
  <div class='dropdown'>
    <button v-on:click='expand' class='dropbtn' id='share'>Share</button>
    <div id='myDropdown' class='dropdown-content' style="display:none;">
      <a href='#'>Link 1</a>
      <a href='#'>Link 2</a>
      <a href='#'>Link 3</a>
    </div>
  </div>
  <div id='todaysDate'></div>
</div>
</template>

<script>
    import appData from '../appData.json'
    export default {
      data () {
        return {
          appData,
          topLogo: require('../assets/svg/top_logo.svg')
        }
      },
      methods: {
        expand (event) {
          var x = document.getElementById(event.target.id)
          if (x.nextSibling.nextSibling.style.display === 'none') {
            x.style.backgroundColor = '#0000FF'
            x.nextSibling.nextSibling.style.display = 'block'
          } else {
            x.style.backgroundColor = 'black'
            x.nextSibling.nextSibling.style.display = 'none'
          }
        }
      }
    }
    function doDate () {
      var str = ''
      var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      var now = new Date()
      var hours = now.getHours()
      var minutes = now.getMinutes()
      var ampm = hours >= 12 ? 'PM' : 'AM'
      hours = hours % 12
      console.log(hours)
      if (hours === 0) {
        hours = 12
      }
      minutes = minutes < 10 ? '0' + minutes : minutes
      str += days[now.getDay()] + ' ' + hours + ':' + minutes + ' ' + ampm
      document.getElementById('todaysDate').innerHTML = str
      if (ampm === 'PM') {
        document.getElementById('todaysDate').classList.add('night')
        document.getElementById('todaysDate').classList.remove('day')
      }
      if (ampm === 'AM') {
        document.getElementById('todaysDate').classList.add('day')
        document.getElementById('todaysDate').classList.remove('night')
      }
    }
    setInterval(doDate, 1000)
</script>
