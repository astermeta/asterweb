// eslint-disable-next-line no-unused-vars
export function getConnectMetaMask () {
  console.log('webjs')
  const _this = this
  this.GLOBAL.web3 = window.web3 = new this.Web3(window.ethereum)
  // window.ethereum.autoRefreshOnNetworkChange = false
  window.ethereum.on('accountsChanged', function (accounts) {
    switch (_this.$route.path) {
      case '/':
        this.connectMetaMask()
        break
      default:
    }
    if (accounts.length === 0) {
      this.currentAccount = null
    } else if (this.currentAccount !== accounts[0]) {
      this.currentAccount = accounts[0]
      // this.$set(this.currentAccount,currentAccount1);
      this.changeCurrentAccout = true
      console.log(
        'accountslphead--------' +
        this.currentAccount +
        this.changeCurrentAccout
      )
    }
    // return  this.currentAccount;
    // 一旦切换账号这里就会执行
    // console.log('accountsChanged')
  })
}
// window.ethereum.on('networkChanged', () => {
//   // console.log('networkChanged')
//   switch (_this.$route.path) {
//     case '/':
//       this.connectMetaMask()
//       break
//     default:
//   }
// })
