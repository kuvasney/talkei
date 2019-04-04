function Factory () {
  /**
   * Get stored Tweets
   * @param {axios} actions
   * @return {object} request
   */
  this.Get = (axios, page = 1) => {
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
}

export default new Factory()
