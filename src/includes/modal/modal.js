export default {
  name: 'Modal',
  data () {
    return {
      toShow: false
    }
  },
  props: {
    modaltype: String
  },
  methods: {
    showModal () {
      this.toShow = true
    },
    closeModal() {
      this.toShow = false
    }
  },
  created () {
    document.onkeydown = evt => {
      evt = evt || window.event
      if (evt.keyCode == 27) {
        this.toShow = false
      }
    }
  }
}
