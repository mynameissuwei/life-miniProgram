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
    label:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
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
      month:this.data.label[month]
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
