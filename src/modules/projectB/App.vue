<template>
    <div id="app">
        <div id="nav">
            <h3 @click="jumpUrl"> projectA </h3>
        </div>
        <router-view/>
    </div>
</template>

<script>
  export default {
    name: '',
    methods: {
      jumpUrl() {
        window.location.href = '/projectA'
      }
    }
  }
</script>

<style>
    #app {
        text-align: center;
    }

    #nav {
        padding: 30px;
    }

    #nav h3 {
        font-weight: bold;
        color: #2c3e50;
        text-decoration: underline;
    }
</style>
