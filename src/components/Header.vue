<template>
<div class="header">
  <img class="top-logo" src="assets/svg/top_logo.svg" alt="">
  <div class="dropdown one">
    <button onclick="myFunction()" class="dropbtn">William Mannie</button>
    <div id="myDropdown" class="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div>
  <div class="dropdown">
    <button onclick="myFunction()" class="dropbtn">File</button>
    <div id="myDropdown" class="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div>
  <div class="dropdown">
    <button onclick="myFunction()" class="dropbtn">View</button>
    <div id="myDropdown" class="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div>
  <div class="dropdown">
    <button onclick="myFunction()" class="dropbtn">Window</button>
    <div id="myDropdown" class="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div>
  <div class="dropdown">
    <button onclick="myFunction()" class="dropbtn">Share</button>
    <div id="myDropdown" class="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div>
</div>
</template>

<script>
    import AppIcons from '../components/AppIcons.vue'
    export default {
      components: AppIcons
    }
</script>
