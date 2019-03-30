import EmojiList from './emojis.json'

/**
 * emojis module.
 * @vue emojis
 */
export default {
  name: 'emojis',
  data () {
    return {
      emojiList: EmojiList,
      toShow: false
    }
  },
  methods: {
    emojiSent: function (emoji) {
      this.$emit('emoji', emoji)
    }
  }
}

/* USO
HTML
<emojis @emoji="insertEmoji" />

METHOD
insertEmoji: function (emoji) {
  var area = document.querySelector('.emojiOk')
  area.append(emoji.char)
}
*/
