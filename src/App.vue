<template>
  <div id="app">
    <header>
      <h1>
        Saudações ao nosso
        <em>grande</em> presidente, talkei!
      </h1>
      <h2>
        Clique na mensagem que quer enviar para o twitter do
        <a
          href="https://twitter.com/jairbolsonaro"
        >@jairbolsonaro</a>
      </h2>
      <div class="sharethis-inline-share-buttons"></div>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import "@/assets/scss/_base.scss";
* {
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

#app {
  max-width: 1024px;
  margin: 0 auto;
  background-color: #c8c8c8;
}

header {
  background: #fff url("assets/talkei-topo.jpg") no-repeat top right;
  background-size: auto 100%;
  color: #3a3a3a;
  padding-bottom: 50px;

  @include respond-to("small") {
    background-size: auto 50%;
    background-position: center right;
  }
}
h1 {
  font-size: 8vh;
  width: 50%;
  margin-bottom: 50px;

  @include respond-to("small") {
    font-size: 5vh;
    width: 90%;
    margin-bottom: 10px;
  }
}

h2 {
  width: 50%;
  font-weight: normal;
  font-size: 4vh;
  margin-bottom: 50px;

  @include respond-to("small") {
    font-size: 3vh;
  }
}

ul {
  list-style: none;
}
</style>
