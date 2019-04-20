import HomeServices from '@/services/home.js'
import Toaster from '@/includes/toaster'
import Emojis from '@/includes/emojis/emojis.vue'
import VueRecaptcha from 'vue-recaptcha'

export default {
  name: 'Home',
  components: {
    Toaster,
    Emojis,
    VueRecaptcha
  },
  data() {
    return {
      //THE TWEET LIST
      tweets: {
        data: [],
        totalPages: null
      },
      // MESSAGE CHAR LIMIT
      char_limit: 110,
      //ACTUAL PAGE
      actual_page: 1,
      //THE TWEET LENGTH
      tweet_length: '',
      //BOXES COLORS ARRAY
      bgcolor: [
        '#d1c9dd', '#e7235a', '#514d68', '#962f90', '#95c623', '#0e4749', '#e55812', '#1d0e40', '#002626', '#2274a5', '#31abb2', '#4c5b5c', '#644536', '#29bf12'
      ],
      //INDEXER FOR COLOR ARRAY
      index_color: 1,
      //SHOW OR HIDE NEW TWEET FORM
      addNewTweet: false,
      //NEW TWEET TO SAVE
      new_tweet: {},
      //TWEETS COUNTER
      messages_sent: 0,
      //TWEET SAVED
      new_tweet_success: false,
      //PRELOADER
      isLoading: false,
      //FOR RECAPTCHA
      status: false,
      serverError: '',
      token: false,
      //MODAL
      showOpenSource: false,
      //DEBUGGER
      toDebug: false,
      innerH: 0,
      scrollt: 0
    }
  },
  methods: {
    mobilecheck () {
      return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1)
    },
    /**
     * Checks the lenght of each tweet
     * @param {String} the message's text
     * @returns {String}
     */
    checkLength(message) {
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
    randColor() {
      let rand = this.messages_sent++
      return rand
    },
    getColour() {
      if (this.index_color < this.bgcolor.length) {
        this.index_color++
      } else {
        this.index_color = 1
      }
      return this.bgcolor[this.index_color]
    },
    /**
     * Makes a new tweet
     * @returns {Object}
     */
    makeNewTweet(e) {
      if (this.tweet_length < 3 || this.tweet_length > 110) {
        return false
      }
      const newTweet = {}
      newTweet.message = this.new_tweet
      HomeServices.PostTweet(this.$axios, {
        'tweet': this.new_tweet.innerText })
        .then(res => {
          newTweet.message = ''
          this.new_tweet.innerText = ''
          this.addNewTweet = false
          this.$refs.recaptcha.reset()
          this.status = false
          this.token = null

          // this.$nextTick(() => {
          //   this.bringMyTweets()
          // });

          this.new_tweet_success = true
          setTimeout(() => { this.new_tweet_success = false }, 3000)

        }).catch(err => {
          console.error('ERRO ', err)
          this.serverError = getErrorMessage(err);

          //helper to get a displayable message to the user
          function getErrorMessage(err) {
            let responseBody
            responseBody = err.response
            if (!responseBody) {
              responseBody = err
            }
            else {
              responseBody = err.response.data || responseBody
            }
            return responseBody.message || JSON.stringify(responseBody)
          }
        })
    },
    /**
     * Get the stored tweets
     * @param {Object} tweet text
     * @returns {Object}
    */
    bringMyTweets () {
      let _this = this
      if (this.actual_page === 1) {
        getTweets(1)
        this.actual_page = 2
      } else if (this.actual_page > 1 && this.actual_page <= this.tweets.total_pages) {
        getTweets(this.actual_page)
        this.actual_page++
      } else {
        return false
      }

      function getTweets (page) {
        if (_this.mobilecheck()) {
          document.documentElement.scrollTo({
            top: document.documentElement.offsetHeight - 200,
            behavior: 'smooth'
          })
        }
        _this.isLoading = true
        HomeServices.Get(_this.$axios, page)
        .then(res => {
          _this.tweets.total_pages = res.data.totalPages
          res.data.tweets.forEach(tweet => {
            _this.tweets.data.push(tweet)
          })
          generateColor()
          _this.isLoading = false
        })
        .catch(err => {
          console.error('ERRO ', err)
          _this.isLoading = false
        })
      }
      function generateColor() {
        _this.tweets.data.map(tweet => {
          tweet.color = _this.getColour()
        })
      }
    },
    countTweet (id) {
      HomeServices.CountTweet(this.$axios, id)
        .then(res => {
          this.messages_sent = res.data.count
        })
        .catch(err => {
          console.error('ERROR', err)
        })
    },
    /**
     * Get contenteditable div length
     * @param {Object} event
    */
    updateText(e) {
      this.new_tweet = e.target
      this.tweet_length = e.target.innerText.length
      if (e.target.innerText.length >= this.char_limit && e.keyCode !== 8) {
        e.preventDefault()
      }
    },
    /**
     * Append an emoji to contenteditable div
     * @param {Object} emoji
    */
    insertEmoji(emoji) {
      var area = document.querySelector('.emojiOk')
      area.append(emoji.char)
    },
    /**
     * Events on page scroll
    */
    scroller() {
      let bottomOfWindow
      window.onscroll = () => {
        if (this.mobilecheck()) {
          // bottomOfWindow = Math.round(document.documentElement.scrollTop + window.innerHeight + 200)  >= document.documentElement.offsetHeight
          bottomOfWindow = Math.round(document.documentElement.scrollTop + window.innerHeight) === document.documentElement.offsetHeight

        } else {
          bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight
        }
        if (bottomOfWindow) {
          this.bringMyTweets()
        }
      }
    },
    /**
     * Recaptcha by Google
     */
    verifyCaptcha(token) {
      this.token = token
      if (token) {
        this.status = true
      }
    },
    /**
     * The initial methods
     */
    ready() {
      this.bringMyTweets()
      this.countTweet(1)
    }
  },
  mounted() {
    this.scroller()
    this.ready()
  }
}
