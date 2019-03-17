<template>
  <div class="home">
    <section class="main">
      <p class="call">
        <a @click="addNewTweet = !addNewTweet">Clique aqui e inclua sua mensagem personalizada na lista!</a>
      </p>
      <article class="add-new-tweet" v-show="addNewTweet">
        <form @submit.prevent="makeNewTweet($event)">
          <div>
            <textarea name="new-tweet" cols="30" rows="10" v-model="new_tweet"></textarea>
            <span class="count_tweet">{{ 256 - new_tweet.length }}</span>
          </div>
          <footer class="button">
            <p class="disclaimer">Fique tranquilo, tudo aqui é anônimo. Não queremos saber o seu nome ou dados pessoais</p>
            <button :disabled="new_tweet.length < 1 || new_tweet.length > 255">Enviar</button>
          </footer>
        </form>
      </article>
      <ul class="tweetlist">
        <li v-for="(tweet, index) in tweets" :key="index" :style="{'backgroundColor': bgcolor[randColor()]}">
          <div :class="checkLength(tweet.message)">
            {{ tweet.message }}
          </div>
          <!-- <em>{{ checkLength(tweet.message) }} - {{tweet.message.length}}</em> -->
        </li>
        <li class="separator"></li>
        <li class="counter">
          <div>
            xxx Tweets enviados até o momento
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      'tweets': [
        {
          'message': '(SMALLER) BOM DIA SENHOR PRESIDENTE! '
        },
        {
          'message': '(SMALLER) GRANDE DIA (SMALLER) GRANDE DIA!!!! DIA1'
        },
        {
          'message': 'A FALA DELES É SÓ ESSA...MAS A PRISÃO DE LULA NÃO ALTERA A CORRUPÇÃO DO LARANJAL PAULISTA LUGAR 😂🍊'
        },
        {
          'message': '(SMALL) GRANDE DIA CAPITÃO, RESGATAR A CONFIABILIDADE É MUITO IMPORTANTE. DEUS ABENÇOE. BRASIL ACIMA 🇧🇷 DEUS ACIMA DE TODOS 🙏. VAMOS AOS 150 FALTA1'
        },
        {
          'message': 'LIVE SEMANAL DE QUINTA-FEIRA COM O PRESIDENTE E MINISTROS, ÀS 18:30. A PARTIR DA SEMANA QUE VEM AS REALIZAREMOS ÀS 19:00. TEMAS DE HOJE: VIAGEM AOS EUA, VACINAÇÃO CONTRA GRIPE E EU ESTOU TENTANDO CH.:'
        },
        {
          'message': 'PARABÉNS AO EMPENHO DE @DNITOFICIAL E @EXERCITOOFICIAL. A SERRA DA ANITA É UM TRECHO QUE REQUER UMA ATENÇÃO ESPECIAL. TODO CAMINHONEIRO QUE PERCORRE A BR-163 VAI SABER DA IMPORTÂNCIA DESSA INTERVENÇÃO. AINDA TEM CHAR PARA ACRESCENTAR ATÉ O LIMITE DE 256 12'
        }
      ],
      bgcolor: [
        '#d1c9dd', '#e7235a', '#514d68', '#962f90', '#95c623', '#0e4749', '#e55812', '#1d0e40', '#002626', '#2274a5', '#31abb2', '#4c5b5c', '#644536', '#29bf12'
      ],
      addNewTweet: false,
      new_tweet: ''
    }
  },
  methods: {
    checkLength: function (message) {
      if (message.length <= 50) {
        return 'smaller'
      } else if (message.length >= 51 && message.length <= 100) {
        return 'small'
      } else if (message.length >= 101 && message.length <= 150) {
        return 'medium'
      } else if (message.length >= 151 && message.length <= 200) {
        return 'big'
      } else {
        return 'bigger'
      }
    },
    randColor: function () {
      var rand = Math.floor(Math.random() * this.bgcolor.length)
      return rand
    },
    makeNewTweet: function (e) {
      var newTweet = {}
      newTweet.message = this.new_tweet
      this.tweets.push(newTweet)
      this.new_tweet = ''
    },
    ready: function () {
    }
  },
  mounted () {
    this.ready()
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

* {
  box-sizing: border-box;
}

h1, h2 {
  font-weight: normal;
}

.call {
  text-align: center;
  line-height: 60px;
  font-size: 1.4em;
  margin: 0;

  a {
    color: #5c5c5c;
    text-decoration: underline;
    cursor: pointer;
  }
}

ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
}

li {
  margin: 0;
  width: 25%;
  height: 50vh;
  justify-content: middle;
  text-align: center;
  position: relative;
  vertical-align: middle;
  padding: 2%;
  position: relative;

  &.separator {
    background-color: #f21b3f;
  }

  &.counter {
    background-color: #ffbc0a;
  }

  em {
    position: absolute;
    top: 0;
    left: 0;
    font-size: .8em;
    color: #000;
    display: block;
    background-color: #0c0;
  }

  div {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    color: #FFF;
    font-weight: 700;
    font-size: 1.5em;
    overflow: hidden;
    hyphens: auto;

    &.smaller {
      font-size: 4.2vh;
    }
    &.small {
      font-size: 3.6vh;
    }
    &.medium {
      font-size: 2.9vh;
    }
    &.big {
      font-size: 2.5vh;
    }
    &.bigger {
      font-size: 2.0vh;
    }
  }
}

.add-new-tweet {
  background-color: #def4fa;
  padding: 20px 0;

  div {
    position: relative;
  }

  textarea {
    border: 2px solid #59cef2;
    border-radius: 5px;
    width: 80%;
    margin: 20px auto;
    display: block;
  }

  .count_tweet {
    position: absolute;
    bottom: 5px;
    right: 12%;
    font-size: 0.8em;
    color: #999;
  }

  footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;

    button {
      background-color: #59cef2;
      border: 0;
      border-radius: 30px;
      font-size: 1.5em;
      color: #FFF;
      padding: .5em 1em;

      &[disabled] {
        opacity: 0.1;
      }
    }
  }

  .disclaimer {
    color: #59cef2;
    font-size: 0.8em;
  }
}
</style>
