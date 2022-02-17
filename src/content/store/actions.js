var timer = null
export const showModal = ({ commit }) => {
  if (timer) clearTimeout(timer)
  commit('SHOW_MODAL')
}

export const hideModal = ({ commit }) => {
  timer = setTimeout(function () {
    commit('HIDE_MODAL')
  }, 500)
}
export const saveDocument = ({ commit }, { userName, domain, twitterId }) => {
  commit('SAVE_DOCUMENT',
    {
      userName: userName, domain: domain, twitterId: twitterId
    })
}

export const handlePostModal = ({ commit }) => {
  commit('SHOW_POST_MODAL')
}

export const hidePostModal = ({ commit }) => {
  commit('HIDE_POST_MODAL')
}
