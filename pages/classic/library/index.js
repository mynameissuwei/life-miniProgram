// pages/classic/book/index.js
import Book from '../../../model/book'
import random from '../../../util/random'

const book = new Book()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    data:"ok",
    showing:true,
    more:'',
    loading:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const data = book.getData();
    data.then(res => {
      console.log(res)
      this.setData({
        data:res.data
      })
    })
  },

  display:function () {
    this.setData({
      showing:false
    })
  },

  showAll:function () {
    this.setData({
      showing:true
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
    this.setData({
      more:random(16)
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})