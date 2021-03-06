// pages/classic/book-detail/book-detail.js
import Book from '../../../model/book'

var book = new Book()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    info:'',
    comment:'',
    status:'',
    posting:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    wx.showLoading()

    const bid = options.bid
    console.log(bid)
    const comment = '我'
    const bookDetail = book.getDetail(bid)
    const bookComment = book.getComment(bid)
    const bookStatus = book.getLikeStatus(bid)

    Promise.all([bookDetail,bookComment,bookStatus]).then(res => {
      this.setData({
        info:res[0].data,
        comment:res[1].data.comments,
        status:res[2]
      })
      wx.hideLoading()
    })


    // book.getDetail(bid).then((res) => {
    //   this.setData({
    //     info:res.data
    //   })
    // })

    // book.getComment(bid).then((res) => {
    //   this.setData({
    //     comment:res.data.comments
    //   })
    // })

    // book.getLikeStatus(bid).then((res) => {
    //   this.setData({
    //     status:res
    //   })
    // })
  },

  onCancel:function () {
    this.setData({
      posting:false
    })
  },

  cancel:function () {
    this.setData({
      posting:true
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