import { http } from './config.js'

class model extends http {
    getMovieData(callBack) {
        this.req({
            type:'top',
            success:(res) => callBack(res)
        })
    }
}

export default model