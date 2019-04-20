function Factory () {
  /**
   * Get stored Tweets
   * @param {axios} actions
   * @return {object} request
   */
  this.Get = (axios, page) => {
    const request = axios.get(`https://www.talkei.net/retrieve?page=${page}`)

    return request
  }
  /**
   * Save a new tweet
   * @param {axios} actions
   * @param {object} tweet message
   * @return {object} request
   */
  this.PostTweet = (axios, params) => {
    const request = axios.post(`https://www.talkei.net/store`, params)

    return request
  }
  /**
   * Save a tweet click
   * @param {axios} actions
   * @param {object} tweet id
   * @return {object} request
   */
  this.CountTweet = (axios, id) => {
    const request = axios.get(`https://www.talkei.net/counter?id=${id}`)

    return request
  }
}


export default new Factory()
