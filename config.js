

const movie = (web) => {
    switch(web.type) {
        case 'top':
            return 'http://bl.7yue.pro/v1/classic/latest?appkey=AbhC31IG7ruCDp57'
        case 'isPlaying':
            return 'http://api.douban.com/v2/movie/nowplaying?apikey=0df993c66c0c636e29ecbb5344252a4a'
        case 'start':
            return 'http://api.douban.com/v2/movie/celebrity/:id?apikey=0df993c66c0c636e29ecbb5344252a4a'
        case 'money':
            return 'http://api.douban.com/v2/movie/us_box?apikey=0df993c66c0c636e29ecbb5344252a4a'
    }
}



class http {
    req(arg) {
        wx.request({
            url:'http://bl.7yue.pro/v1' + arg.url,
            get:arg.method,
            header:{
                "content-type": "json",
                "appkey":"AbhC31IG7ruCDp57"
            },
            success:(res) => {
                    let code = res.statusCode
                    if(code < 350) {
                      arg.success(res)  
                    } else {
                      wx.showToast({
                          title:'wrong',
                          duration:1500
                      })
                    }
                    
            },
            error:(err) => {
                wx.showToast({
                    title:'wrong',
                    duration:1500
                })
            }
        })   
    }
}

var htp = new http()

export  { htp,http }