function Factory () {
  /**
   * Buscar empresas
   * @param {axios} actions
   * @param {string} query
   * @return {object} request
   */
  this.Get = (axios, query) => {
    const request = axios.get(`http://www.talkei.net/retrieve`)

    return request
  }
  /**
   * Buscar empresas
   * @param {axios} actions
   * @param {string} query
   * @return {object} request
   */
  this.PostTweet = (axios, params) => {
    const request = axios.post(`https://www.talkei.net/store`, params)

    return request
  }
}

export default new Factory()
