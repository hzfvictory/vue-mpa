<template>
    <ul>
        <li v-for="(item, key) of 1000" :key="key" @click="getIndex(key)">
            {{item}}
        </li>
    </ul>
</template>

<script>
  export default {
    name: "",
    methods: {
      getIndex(key) {
        console.log(key + 1);
      }
    }
  }
</script>

<style scoped type="text/scss">
    li {
        list-style-type: none;
    }
</style>