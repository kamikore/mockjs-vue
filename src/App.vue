<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import mockapi from '../api/mockapi';

function findAll() {
  mockapi.findAll().then(res => {
    console.log("findAll", res);
  })
}


function getUser() {
  mockapi.getUser().then(res => {
    console.log("getUser", res);
  })
}

function addUser() {
  mockapi.addUser({
    name: 'Ben',
    age: 23
  }).then(res => {
    console.log("addUser", res);
  })
}


</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <div class="btn-group">
        <button @click="findAll">findAll</button>
        <button @click="getUser">getUser</button>
        <button @click="addUser">addUser</button>
      </div>
    </div>

  </header>


  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .btn-group button {
    margin: 0 10px;
  }
}
</style>
