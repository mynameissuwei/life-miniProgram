// components/music/index.js
import behavior from '../Behavior'

const music = wx.getBackgroundAudioManager()

Component({
  /**
   * 组件的属性列表
   */
  behaviors:[behavior],

  properties: {
    
  },

  detached:function() {
    music.stop()
  },

  /**
   * 组件的初始数据
   */
  data: {
    play:'images/play.png',
    pause:'images/pause.png',
    init:true,
    address:'https://dl.stream.qqmusic.qq.com/M800004D7A7k4WwpFY.mp3?vkey=17A948218ED1BC4B92BBEC2649E12853539C1ACF7BEF3C04D51C1D21A1D7A11C06829EBB45D75B385503A69EF05E0D4F5397F54D5B45BAD7&guid=5075678&uid=0&fromtag=30'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onPlay:function(e) {
      if(this.data.init){
        this.setData({
          init: !this.data.init
        })
        music.src = this.data.address
      } else {
        this.setData({
          init: !this.data.init
        })
        music.pause()
      }
    }
  }  
})
