import { http } from './config.js'

class model extends http {

    getMovieData(callBack) {
        this.req({
            url:'/classic/latest',
            method:"GET",
            success:(res) => {
              callBack(res)
              this.setStorageData(res.data.index)
            }
        })
    }


    getNextData(index,callBack) {
        this.req({
            url:'/classic/' + index + '/next',
            method:'GET',
            success:(res) => callBack(res)
        })
    }

    getLastData(index,callBack) {
      this.req({
        url:'/classic/' + index + '/previous',
        method:'GET',
        success:(res) => {
            callBack(res)
        }
      })
    }

    isLatest(index) {
        let latest = this.getStorageData()
        return index === latest?true:false
    }

    isFirst(index) {
        return index === 1?true:false
    }

    setStorageData(index) {
        wx.setStorageSync('index',index)
    }

    getStorageData() {
        return wx.getStorageSync('index')
    }

    getKey(index) {
        return 'classic' + index
    }
    
}

export default model