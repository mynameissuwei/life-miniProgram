// components/expoise/expoise.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index:{
      type:String,
      observer:function(n,o){
        if(n < 10 && n > 0) {
          this.setData({
            _index:'0' + n
          })
        }
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    year:"",
    month:"",
    _index:"",
  },

  attached:function(){
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth()
    this.setData({
      year,
      month
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
