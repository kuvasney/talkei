import HomeServices from '@/services/home.js'
import Toaster from '@/includes/toaster'
import Emojis from '@/includes/emojis/emojis.vue'
export default {
  name: 'Home',
  components: {
    Toaster,
    Emojis
  },
  data() {
    return {
      //THE TWEET LIST
      tweets: {},
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
      //DEBUGGER
      toDebug: false
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
      console.log('this.new_tweet', this.new_tweet.innerText)
      const newTweet = {}
      newTweet.message = this.new_tweet
      HomeServices.PostTweet(this.$axios, { tweet: this.new_tweet.innerText })
        .then(res => {
          console.log(' enviado ', res)
          newTweet.message = ''
          this.new_tweet.innerText = ''
          this.addNewTweet = false

          this.$nextTick(() => {
            this.bringMyTweets()
          });

          this.new_tweet_success = true
          setTimeout(() => { this.new_tweet_success = false }, 3000)

        }).catch(err => {
          console.error('ERRO ', err)
        })

    },
    /**
     * Get the stored tweets
     * @param {Object} tweet text
     * @returns {Object}
    */
    bringMyTweets() {
      var _this = this
      this.isLoading = true
      if (!this.tweets.data) {
        HomeServices.Get(this.$axios)
          .then(res => {
            this.tweets = {
              data: res.data.data,
              current_page: res.data.current_page,
              last_page: res.data.last_page,
              total: res.data.total
            }
            this.isLoading = false
            generateColor()
          }).catch(err => {
            console.error('ERRO ', err)
            this.isLoading = false
          })
      } else if (this.tweets.current_page < this.tweets.last_page) {
        HomeServices.Get(this.$axios, this.tweets.current_page + 1)
          .then(res => {
            res.data.data.forEach(tweet => {
              this.tweets.data.push(tweet)
            })
            this.tweets.current_page = res.data.current_page
            this.isLoading = false
            generateColor()
          }).catch(err => {
            console.error('ERRO ', err)
            this.isLoading = false
          })
      } else {
        this.isLoading = false
      }
      function generateColor() {
        _this.tweets.data.map(tweet => {
          tweet.color = _this.getColour()
        })
      }
    },
    /**
     * Get contenteditable div length
     * @param {Object} event
    */
    updateText(e) {
      this.new_tweet = e.target
      this.tweet_length = e.target.innerText.length
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
      let bottomOfWindow;
      window.onscroll = () => {
        if (this.mobilecheck()) {
          bottomOfWindow = Math.round(document.documentElement.scrollTop + window.innerHeight + 200)  >= document.documentElement.offsetHeight
        } else {
          bottomOfWindow = Math.round(document.documentElement.scrollTop + window.innerHeight) === document.documentElement.offsetHeight
        }
        if (bottomOfWindow) {
          this.bringMyTweets()
        }
      }
    },
    /**
     * The initial methods
     */
    ready() {
      this.bringMyTweets()
    }
  },
  mounted() {
    this.scroller()
    this.ready()
  }
}
