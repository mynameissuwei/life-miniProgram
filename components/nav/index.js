Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
    },
    lastest: {
      type: Boolean,
    },
    oldest: {
      type: Boolean,
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    left: 'images/last.png',
    right: 'images/next.png',
    disleft: 'images/dislast.png',
    disright: 'images/disnext.png',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLeft: function() {
      if (!this.properties.lastest) {
        this.triggerEvent('left', {}, {});
      }
    },
    onRight: function() {
      if (!this.properties.oldest) {
        this.triggerEvent('right', {}, {});
      }
    },
  },
});
