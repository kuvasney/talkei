<template>
  <div id="app">
    <header>
      <h1>
        Envie uma saudação direto para nosso <em>grande</em> presidente.
      </h1>
      <h2>
        Para exercer sua liberdade de expressão basta clicar em uma mensagem abaixo e o twitter abrirá automaticamente com a mensagem e o handler do presidente, <em>talkei</em>!?
      </h2>
      <span class="character" />
      <div class="sharethis-inline-share-buttons" />
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
  // max-width: 1024px;
  margin: 0 auto;
  background-color: #c8c8c8;
}

header {
  background:transparent url("assets/talkei-topo-bg.png");
  color: #3a3a3a;
  padding-bottom: 50px;
  position: relative;
  padding: 1em;
  min-height: 55vh;

  @include respond-to("small") {
  }
  @include respond-to("medium") {
  }
  @include respond-to("large") {
  }


  .character {
    background: url("assets/talkei-topo.png") no-repeat top right;
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 50%;
    background-size: 100% auto;
    height: 100%;

    @include respond-to("small") {
      // background-size: 100% auto;
      background-position: bottom right;
    }
    @include respond-to("landscape") {
      background-size: auto 100%;
      background-position: bottom right;
    }
    @include respond-to("medium") {
      height: 100%;
      background-position: bottom right;
    }
    @include respond-to("large") {
      // background-size: auto 50%;
      background-position: bottom right;
      height: 100%;
    }
    @include respond-to("larger") {
      // background-size: auto 100%;
      background-position: bottom right;
    }
  }
}

h1 {
  font-size: 5vh;
  width: 50%;
  margin-bottom: 50px;
  position: relative;
  z-index: 100;

  @include respond-to("small") {
    font-size: 5vh;
    margin-bottom: 10px;
    width: 100%;
  }
  @include respond-to("landscape") {
    font-size: 8vh;
    margin-bottom: 10px;
    width: 50%;
  }
  @include respond-to("medium") {
    font-size: 6vh;
    margin-bottom: 10px;
  }
  @include respond-to("large") {
    font-size: 6vh;
    margin-bottom: 10px;
  }
  @include respond-to("larger") {
    font-size: 10vh;
    margin-bottom: 10px;
  }
}

h2 {
  width: 50%;
  font-weight: normal;
  font-size: 4vh;

  @include respond-to("small") {
    font-size: 2vh;
  }
  @include respond-to("landscape") {
    font-size: 5vh;
  }
  @include respond-to("medium") {
    font-size: 2.5vh;
  }
  @include respond-to("large") {
    font-size: 2.5vh;
  }
  @include respond-to("larger") {
    font-size: 5vh;
  }
}

ul {
  list-style: none;
}
</style>
