<template>
    <div id="app">
        <div id="nav">
            <h3 @click="jumpUrl"> projectB </h3>
            <router-link tag="h3" to="/list">list</router-link>
            <router-link tag="h3" to="/test">test</router-link>
        </div>
        <router-view/>
    </div>
</template>

<script>
  export default {
    methods: {
      jumpUrl() {
        window.location.href = '/projectB'
      }
    }
  }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
    }

    #nav h3 {
        font-weight: bold;
        color: #2c3e50;
        text-decoration: underline;
        transform: rotateX(-45deg);
    }

    #nav h3.router-link-exact-active {
        color: #42b983;
    }
</style>
