// components/search/search.js
import searchModel from './model/keyword'

const searchBook = new searchModel()

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    historyComment:[],
    hotComment:[]
  },

  attached:function() {
    searchBook.getHost().then((res) => {
      this.setData({
        hotComment:res.data.hot
      })
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onCancel() {
      this.triggerEvent('showAll',{},{})
    },
    onConfirm(event) {
      const text = event.detail.value
      searchBook.addHistory(text)
      this.setData({
        historyComment:wx.getStorageSync('q')
      })
    },
    onDelete(event) {
      console.log(event.detail.text)
    }
  }
})
