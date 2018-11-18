// components/library-book/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item:{
      type:Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    test:'test'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onshow:function(e) {
      wx.navigateTo({
        url: '/pages/classic/book-detail/book-detail',
      })
    }
  }
})
