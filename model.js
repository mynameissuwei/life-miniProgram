import { http } from './config.js'

class model extends http {

    getMovieData(callBack) {
        this.req({
            url:'/classic/latest',
            method:"GET",
            success:(res) => callBack(res)
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
        success:(res) => callBack(res)
      })
    }
    
}

export default model