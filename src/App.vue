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
      <p>
        <img src="@/assets/open_source.png" alt="Open Source" class="opensource"> <span class="hidemob">2019 Open Source.</span>
      </p>
      <ul class="linklist">
        <li>
          <a @click="openSourceModal()" class="open-modal">
            Termos & Privacidade
          </a>
        </li>
      </ul>
      <p>
        <a href="https://github.com/talkei">
          <img src="@/assets/github.png" alt="Github" class="github">
        </a>
      </p>
      <p class="madewluv">
        Made with <i>❤</i> in <b>Brazil</b>
      </p>
    </footer>
    <modal tabindex="0" ref="openSourceModal" modaltype="window" @keyup.esc="hideModal()">
      <div class="openSourceModal__content">
        <img src="@/assets/license.png" alt="Open Source" class="licenseimg">
        <h3>
          Copyright 2019 MIT OPEN SOURCE LICENSE
        </h3>
        <p>É concedida permissão, a título gratuito, a qualquer pessoa que obtenha uma cópia deste software e dos arquivos de documentação associados ao software TALKEI.NET, para lidar com o software TALKEI.NET sem restrições, incluindo, sem limitação, os direitos de uso, cópia, modificação, fusão, publicação, distribuição, sublicenciamento e/ou venda de cópias do software TALKEI.NET, bem como permitir que as pessoas a quem o software TALKEI.NET é fornecido o façam, sujeitas às seguintes condições:</p>
        <p>O aviso de copyright acima e este aviso de permissão devem ser incluídos em todas as cópias ou partes substanciais do software TALKEI.NET.</p>
        <p>O SOFTWARE TALKEI.NET É FORNECIDO "NO ESTADO EM QUE SE ENCONTRA", SEM NENHUM TIPO DE GARANTIA, EXPRESSA OU IMPLÍCITA, INCLUINDO, MAS NÃO SE LIMITANDO ÀS GARANTIAS DE COMERCIALIZAÇÃO, ADEQUAÇÃO A UM FIM ESPECÍFICO E NÃO VIOLAÇÃO.</p>
        <p>EM NENHUMA CIRCUNSTÂNCIA, OS AUTORES OU PROPRIETÁRIOS DE DIREITOS DE AUTOR PODERÃO SER RESPONSABILIZADOS POR QUAISQUER RECLAMAÇÕES, DANOS OU OUTRAS RESPONSABILIDADES, QUER EM AÇÕES CONTRATUAIS, DE REPARAÇÃO DE DANOS, CRIMINAIS E DE QUALQUER NATUREZA, DECORRENTES DE OU RELACIONADAS COM O SOFTWARE OU O USO OU OUTRAS NEGOCIAÇÕES NO SOFTWARE.</p>
      </div>
    </modal>
    <modal tabindex="0" ref="cookiesModal" modaltype="window" @keyup.esc="hideModal()">
      <div class="cookiesModal__content">
        <img src="@/assets/cookie.png" alt="" class="cookie">
        <h3>
          Política de Cookies
        </h3>
        <p>
          Este website utiliza cookies para ajudar-nos a oferecer uma melhor experiência à você durante suas visitas.
        </p>
        <button @click="createCookie()">
          Aceitar
        </button>
      </div>
    </modal>
  </div>
</template>

<script>
import Modal from '@/includes/modal/modal.vue'

export default {
  name: 'App',
  components: {
    Modal
  },
  methods: {
    /**
     * Opens the Open Source Modal
     */
    openSourceModal () {
      this.$refs.openSourceModal.showModal()
    },
    /**
     * Closes the Open Source Modal
     */
    hideModal () {
      this.$refs.openSourceModal.closeModal()
    },
    /**
     * Creates the website cookie
     */
    createCookie () {
      document.cookie = 'talkei-cookie'
      this.$refs.cookiesModal.closeModal()
    },
    /**
     * Checks if the website cookie already exists
     */
    checkForCookie () {
      var carr = document.cookie.split(';')
      if (carr.includes(' talkei-cookie', 0)) {
        return false
      } else {
        this.$refs.cookiesModal.showModal()
      }
    }
  },
  mounted () {
    this.checkForCookie()
  }
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

  @include small {
  }
  @include medium {
  }
  @include large {
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

    @include small {
      // background-size: 100% auto;
      background-position: bottom right;
    }

    @include medium {
      height: 100%;
      background-size: 100% auto;
      background-position: bottom right;
    }

    @include large {
      background-size: auto 100%;
      background-position: bottom right;
      height: 100%;
    }
  }
}

h1 {
  font-size: 5vh;
  margin-bottom: 50px;
  position: relative;
  z-index: 100;
  margin-bottom: 10px;
  font-size: 8vw;

  @include small {
    width: 100%;
    font-size: 8vw;
  }

  @include medium {
    // font-size: 6vh;
  }
  @include large {
    width: 50%;
    font-size: 4.5vw;
  }
}

h2 {
  width: 50%;
  font-weight: normal;
  font-size: 4vw;

  @include small {
    font-size: 4vw;
  }

  @include medium {
    font-size: 4vw;
  }

  @include large {
    font-size: 2vw;
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
  height: 5vh;
  font-size: .8em;
  background-color: #e8e8e8;
  padding: 0 10px;

  * {
    margin: 0;
    padding: 0 ;
  }

  p {
    line-height: 1.2em;
  }

  .github {
    height: 1.5em;
    width: auto;

    @media (max-width: "420px") {
      height: 1em;
    }
  }
}

.opensource {
  width: auto;
  height: 1.2em;
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

.open-modal {
  cursor: pointer;
}

.openSourceModal__content {
  text-align: center;
  background-color: #e3e3e3;
  padding: 2%;
  color: #3a3a3a;
  border-radius: 20px;
  max-height: 90vh;
  overflow: auto;

  .licenseimg {
    display: block;
    margin: 20px auto;
    width: 10vh;
    height: auto;
  }

  h2 {
    text-align: center;
  }
}

.cookiesModal__content {
  background-color: #c7b299;
  padding: 2%;

  img {
    float: left;
    margin-right: 10px;
    max-width: 20vw;
    height: auto;
  }

  button {
    border: 2px solid #a4694b;
    border-radius: 10px;
    background-color: #b87750;
    padding: 10px;
  }
}

.hidemob {

  @media (max-width: "420px") {
    display: none;
  }
}

</style>
