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
    <footer class="app__footer">
      <p><img src="@/assets/open_source.png" alt="Open Source" class="opensource"> <span class="hidemob">2019 Open Source.</span></p>
      <ul class="linklist">
        <li>
          <a href="">
            Termos
          </a>
        </li>
        <li>
          <a href="">
            Privacidade
          </a>
        </li>
        <!-- <li>
          <a href="">
            Open Source
          </a>
        </li> -->
      </ul>
      <p>
        <a href="">
          <img src="@/assets/github.png" alt="Github" class="github">
        </a>
      </p>
      <p class="madewluv">
        Made with <i>❤</i> in <b>Brazil</b>
      </p>
    </footer>
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

.app__footer {
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 10vh;
  background-color: #e8e8e8;
  padding: 0 10px;

  * {
    margin: 0;
    padding: 0 ;
  }

  p {
    line-height: 2em;
  }

  .github {
    height: 2em;
    width: auto;

    @media (max-width: "420px") {
      height: 1em;
    }
  }
}

.opensource {
  width: auto;
  height: 2em;
  margin-right: 10px;
  display: block;
  float: left;

  @media (max-width: "420px") {
    height: 1em;
    margin-right: 5px;
  }
}

.linklist {
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  align-items: center;
  margin-left: 20px;

  @media (max-width: "420px") {
      margin-left: 10px;
    }

  li {
    margin-right: 15px;

    @media (max-width: "420px") {
      font-size: .7em;
    }
  }

  a {
    text-decoration: none;
    color: #397eaa;
  }
}

.madewluv {
  margin-left: 20px;

  i {
    font-style: normal;
    color: red;
    font-size: 1.5em;
  }

  @media (max-width: "420px") {
    font-size: .7em;
  }
}

.hidemob {

  @media (max-width: "420px") {
    display: none;
  }
}

</style>
