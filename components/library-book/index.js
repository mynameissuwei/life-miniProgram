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
      const bid = this.properties.item.id
      console.log(bid)
      wx.navigateTo({
        url: `/pages/classic/book-detail/book-detail?bid=${bid}`,
      })
    }
  }
})
