import Book from "../../../model/book";
const bookModel = new Book()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasUserInfo: false,
    userInfo: null,
    classics:null,
    count:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getMyFavor()
    this.getBookCount()
    this.userAuthorize()
  },

  getBookCount() {
    bookModel.getBookCount().then(res => {
      this.setData({
        count:res.data.count
      })
    })
  },

  getMyFavor() {
    bookModel.getMyFavor().then(res => { 
      console.log(res)
      this.setData({
        classics:res.data
      })
    })
  },

  userInfo(event) {
    let userInfo = event.detail.userInfo
    if (userInfo) {
      this.setData({
        hasUserInfo: true,
        userInfo: userInfo
      })
    }
  },

  userAuthorize() {
    wx.getSetting({
      success:data => {
        console.log(data)
        if(data.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success:data => {
              this.setData({
                hasUserInfo:true,
                userInfo:data.userInfo
              })
            }
          })
        } else {
          console.log('err')
        }
      }
    })
  },

  about:function() {
    wx.navigateTo({
      url:"../about/about"
    })
  },

  onStudy:function() {
    wx.navigateTo({
      url:'../course/course'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})