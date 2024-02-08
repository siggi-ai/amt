<template>
    <header class="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
      <button class="relative z-30 md:mt-5 p-5 text-3xl md:text-8xl text-white" >
        <router-link to="first">
          Willkommen im Amt
          <img class="image" src="/images/aa2.png" alt="Logo Amt" width="300" height="400">
        </router-link>
        
      </button>
      <video autoplay muted loop class="absolute z-10 ml-96 md:ml-0 w-auto min-w-full min-h-full max-w-none">
        <source src="..\..\video\v1.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      
    </header>
  </template>
  
  <style>
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    font-family: Arial;
    font-size: 17px;
  }
  
  .image {
    margin: 0 auto;
  }

  #myVideo {
    position: absolute;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
  }
  
  .content {
    position: fixed;
    color: #f1f1f1;
    width: 100%;
    padding: 20px;
    font-size: 2em;
    margin: 0 auto;
    text-align: center;
    margin-top: 2em;
  }
  </style>