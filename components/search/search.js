// components/search/search.js
import searchModel from './model/keyword'

const searchBook = new searchModel()


Component({
  /**
   * 组件的属性列表
   */

  properties: {
    more:{
      type:String,
      observer:'loading'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    historyComment:[],
    hotComment:[],
    searchData:[],
    showComment:true,
    text:'',
    loading:false,
    showLoad:false
  },

  attached:function() {
    this.setData({
      historyComment: wx.getStorageSync('q')
    })
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
      const Sbook = {
        q:text,
        summary:1, 
      }
      searchBook.addHistory(text)
      this.setData({
        historyComment:wx.getStorageSync('q'),
        showComment:false,
        text,
        showLoad:true
      })
      searchBook.search(Sbook).then((res) => {
        this.setData({
          searchData:res.data.books,
          showLoad:false
        })
      })
    },
    loading() {
      const Sbook = {
        q:this.data.text,
        summary:1,
        start:this.data.searchData.length
      }
      if(this.data.loading) {
        return
      }
      searchBook.search(Sbook).then((res) => {
        this.data.loading = true
        const allData = this.data.searchData.concat(res.data.books)
        this.setData({
          searchData:allData,
          loading:false
        })
      })
    },
    onDelete() {
      this.setData({
        searchData: [],
        inputValue: '',
        showComment: true
      })
    }
  }
})
