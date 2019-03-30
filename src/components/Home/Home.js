import HomeServices from '@/services/home.js'
import Toaster from '@/includes/toaster'
export default {
  name: 'Home',
  components: {
    Toaster
  },
  data () {
    return {
      twitter_url: '',
      tweets: {},
      tweet_list: {},
      bgcolor: [
        '#d1c9dd', '#e7235a', '#514d68', '#962f90', '#95c623', '#0e4749', '#e55812', '#1d0e40', '#002626', '#2274a5', '#31abb2', '#4c5b5c', '#644536', '#29bf12'
      ],
      index_color: 1,
      addNewTweet: false,
      new_tweet: '',
      messages_sent: 0,
      isLoading: false,
      new_tweet_success: false
    }
  },
  methods: {    
    /**
     * Checks the lenght of each tweet
     * @param {String} the message's text
     * @returns {String}
     */
    checkLength (message) {
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
    randColor () {
      // let rand = Math.floor(Math.random() * this.bgcolor.length)
      let rand = this.messages_sent++
      return rand
    },
    getColour () {
      if (this.index_color < this.bgcolor.length) {
        this.index_color++
        console.log('this.index_color if',this.index_color)
      } else {
        this.index_color = 1
        console.log('this.index_color else',this.index_color)
      }
      return this.bgcolor[this.index_color]
      // let colour = 1
      // if (index > this.bgcolor.length) {
      //   colour = Math.floor(Math.random() * this.bgcolor.length)
      // } else {
      //   colour = index
      // }
      // return colour
    },
    /**
     * Makes a new tweet
     * @returns {Object}
     */
    makeNewTweet (e) {
      const newTweet = {}
      newTweet.message = this.new_tweet
      HomeServices.PostTweet(this.$axios, {tweet: this.new_tweet})
        .then(res => {
          console.log(' enviado ', res)
          newTweet.message = ''
          this.addNewTweet = false

          this.$nextTick(() => {
            this.bringMyTweets()
          });

          this.new_tweet_success = true
          setTimeout(() => {this.new_tweet_success = false}, 3000)

        }).catch(err => {
          console.error('ERRO ', err)
        })

    },
    /**
     * Get the stored tweets 
     * @param {Object} tweet text
     * @returns {Object}
     */
    bringMyTweets () {
      var _this = this
      this.isLoading = true
      if (!this.tweets.data) {
        console.log('estou no if', this.tweets.data)
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
        console.log('estou no else if', this.tweets.data)
        HomeServices.Get(this.$axios, this.tweets.current_page + 1)
          .then(res => {
            res.data.data.forEach(tweet => {
              this.tweets.data.push(tweet)
            })
            this.tweets.current_page = res.data.current_page
            console.log('so what?', this.tweets)
            this.isLoading = false
            generateColor()
          }).catch(err => {
            console.error('ERRO ', err)
            this.isLoading = false
          })
      } else {
        console.log('estou no else', this.tweets.data)
        this.isLoading = false
      }
      function generateColor() {
        _this.tweets.data.map(tweet => {
          tweet.color = _this.getColour()
        })
      }
    },
    scroll () {
      window.onscroll = () => {
        let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight

        if (bottomOfWindow) {
         this.bringMyTweets()
        }
      }
    },
    /**
     * The initial methods
    */
    ready () {
      this.bringMyTweets()
      this.scroll()
    }
  },
  mounted () {
    this.ready()
  }
}
