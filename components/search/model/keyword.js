const key = 'q'
const maxLength = 9

class searchModel {  

  getHistory() {
    if(wx.getStorageSync(key) == '') {
      return []
    }
    return wx.getStorageSync(key)
  }

  getHost() {

  }

  addHistory(value) {
    const val = this.getHistory()
    const len = val.length
    if(val.includes(value)) {
      return  
    }
    console.log(len)
    if(len > maxLength) {
      val.pop()
      val.unshift(value)
    } else {
      val.unshift(value)
    }
    wx.setStorageSync(key,val)
  }

}

export default searchModel 