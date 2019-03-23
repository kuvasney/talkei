export default {
  name: 'Home',
  components: {},
  data () {
    return {
      twitter_url: '',
      'tweets': [
        {
          'message': 'Não vai fazer merda hoje, por favor'
        },
        {
          'message': 'O Brasil merece Bolsonaro.'
        },
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
      tweet_list: {},
      bgcolor: [
        '#d1c9dd', '#e7235a', '#514d68', '#962f90', '#95c623', '#0e4749', '#e55812', '#1d0e40', '#002626', '#2274a5', '#31abb2', '#4c5b5c', '#644536', '#29bf12'
      ],
      addNewTweet: false,
      new_tweet: '',
      messages_sent: 0
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
    }
  }
}
