export default {
  SHOW_MODAL(state) {
    state.showPopupModal = true
  },
  HIDE_MODAL(state) {
    state.showPopupModal = false
  },
  SAVE_DOCUMENT(state, payload) {
    state.documentValue = {
      ...state.documentValue,
      ...payload
    }
  },
  SHOW_POST_MODAL(state) {
    state.showPostModal = true
  },
  HIDE_POST_MODAL(state) {
    state.showPostModal = false
  }

}
