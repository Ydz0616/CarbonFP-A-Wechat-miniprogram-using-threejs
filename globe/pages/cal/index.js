// pages/cal/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ecm: 0,
    tmm: 0,
    result: 0,
    hideview: true,
    Eresult:0,
    Tresult:0
  },
  calculate: function(e){
    var elec = this.data.ecm;
    var gas = this.data.tmm;
    var result = (elec * 0.785 + gas * 0.12) * 0.001
    var Eresult = elec * 0.785 * 0.001
    var Tresult = gas * 0.12 * 0.001
    this.setData({
      hideview: false,
      result: result,
      Eresult: Eresult,
      Tresult: Tresult

    })
  },
  EcmHandler(e){
    this.setData({
      ecm: e.detail.value
    })
  },
  TmmHandler(e){
    this.setData({
      tmm: e.detail.value
    })
  },
  showResult: function(e){
    this.setData({
      hideview: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})