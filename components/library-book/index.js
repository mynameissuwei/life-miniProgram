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

  attached:function() {
    console.log(this.properties.item)
    console.log(this.data.test)
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

  }
})
