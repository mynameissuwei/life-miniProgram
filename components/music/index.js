



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
    address:'https://dl.stream.qqmusic.qq.com/M800003MsMD70D1xC9.mp3?vkey=05D3E8AA90308B21B81F1F47D9CE907CD55A401BB2D142420E3E2B7F888C420FB2176F4424A9B7BBA4B58E2FDF356254E6D747A4D15A55A9&guid=660248328&uid=0&fromtag=30'
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
