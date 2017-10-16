<template>
<div class='header'>
  <img class='top-logo' v-bind:src='topLogo' alt=''>
  <div class='dropdown one'>
    <button onclick='myFunction()' class='dropbtn'>William Mannie</button>
    <div id='myDropdown' class='dropdown-content'>
      <a href='#'>Link 1</a>
      <a href='#'>Link 2</a>
      <a href='#'>Link 3</a>
    </div>
  </div>
  <div class='dropdown'>
    <button onclick='myFunction()' class='dropbtn'>File</button>
    <div id='myDropdown' class='dropdown-content'>
      <a href='#'>Link 1</a>
      <a href='#'>Link 2</a>
      <a href='#'>Link 3</a>
    </div>
  </div>
  <div class='dropdown'>
    <button onclick='myFunction()' class='dropbtn'>View</button>
    <div id='myDropdown' class='dropdown-content'>
      <a href='#'>Link 1</a>
      <a href='#'>Link 2</a>
      <a href='#'>Link 3</a>
    </div>
  </div>
  <div class='dropdown'>
    <button onclick='myFunction()' class='dropbtn'>Window</button>
    <div id='myDropdown' class='dropdown-content'>
      <a href='#'>Link 1</a>
      <a href='#'>Link 2</a>
      <a href='#'>Link 3</a>
    </div>
  </div>
  <div class='dropdown'>
    <button onclick='myFunction()' class='dropbtn'>Share</button>
    <div id='myDropdown' class='dropdown-content'>
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
      }
    }
    function doDate () {
      var str = ''
      var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      var now = new Date()
      str += days[now.getDay()] + ' ' + now.getHours() + ':' + now.getMinutes()
      document.getElementById('todaysDate').innerHTML = str
    }
    setInterval(doDate, 1000)
</script>
