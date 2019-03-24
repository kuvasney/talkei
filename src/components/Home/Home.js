import HomeServices from '@/services/home.js'
export default {
  name: 'Home',
  components: {},
  data () {
    return {
      twitter_url: '',
      tweets: [],
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
    /**
     * Checks the lenght of each tweet
     * @param {String} the message's text
     * @returns {String}
     */
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
    /**
     * Generates a random index do get a random color from colors array
     * @returns {Number}
     */
    randColor: function () {
      var rand = Math.floor(Math.random() * this.bgcolor.length)
      return rand
    },
    /**
     * Makes a new tweet
     * @returns {Object}
     */
    makeNewTweet: function (e) {
      var newTweet = {}
      newTweet.message = this.new_tweet
      HomeServices.PostTweet(this.$axios, {tweet: this.new_tweet})
        .then(res => {
          console.log(' enviado ', res)
        }).catch(err => {
          console.error('ERRO ', err)
        })
    },
    /**
     * Get the stored tweets 
     * @param {Object} tweet text
     * @returns {Object}
     */
    bringMyTweets: function () {
      HomeServices.Get(this.$axios)
        .then(res => {
          console.log('so what?', res.data)
          this.tweets = res.data
        }).catch(err => {
          console.error('ERRO ', err)
        })
    }
  }
}
