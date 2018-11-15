// pages/classic/classic.js
import model from '../../model.js'

var suwei = new model()

Page({

  /**
   * 页面的初始数据
   */
  data:{
    classic:null,
    latest:true,
    oldest:false,
    hidden:true
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    suwei.getMovieData((res) => {
        this.setData({
          classic:res.data
        })
    })
    console.log(this.data.classic)
  },

  onLeft:function() {
    let index = this.data.classic.index
    let latest = this.data._index
    let key = suwei.getKey(index + 1)
    let classic = wx.getStorageSync(key)
    if(!classic) {
      suwei.getNextData(index,(res)=>{
        this.setData({
          classic:res.data,
          oldest:suwei.isFirst(index + 1),
          latest:suwei.isLatest(index + 1)
        })
        wx.setStorageSync(key,res.data)
      })
    } else {
      this.setData({
        classic,
        oldest:suwei.isFirst(index + 1),
        latest:suwei.isLatest(index + 1)
      })
    }

  },

  onRight:function() {
    let index = this.data.classic.index
    let latest = this.data._index
    let key = suwei.getKey(index - 1)
    let classic = wx.getStorageSync(key)
    if(!classic){
      suwei.getLastData(index,(res) => {
        this.setData({
          classic:res.data,
          oldest:suwei.isFirst(index - 1),
          latest:suwei.isLatest(index - 1)
        })
        wx.setStorageSync(key,res.data)
      })
    }else{
      this.setData({
        classic,
        oldest:suwei.isFirst(index - 1),
        latest:suwei.isLatest(index - 1)
      })
    }
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