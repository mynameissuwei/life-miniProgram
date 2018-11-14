// components/movie/index.js
import behavior from '../Behavior'

Component({
  /**
   * 组件的属性列表
   */
  behaviors:[behavior],
  
  properties: {
    img:{
      type:'String'  
    },
    title:{
      type:'String'
    },
    year:{
      type:'String'
    },
    content:{
      type:'String'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
