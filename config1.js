class http1 {

  getModel({url,data = {},method = 'GET'}) {
    return new Promise((resolve,reject) => {
      this.req(url,data = {},method = 'GET',resolve,reject)
    })
  }

  req(url,data,method,resolve,reject) {
    wx.request({
        url:'http://bl.7yue.pro/v1' + url,
        get:method,
        data,
        header:{
            "content-type": "json",
            "appkey":"AbhC31IG7ruCDp57"
        },
        success:(res) => {
                let code = res.statusCode
                if(code < 350) {
                  resolve(res);  
                } else {
                  reject();
                  wx.showToast({
                      title:'wrong',
                      duration:1500
                  });
                }   
        },
        error:(err) => {
            reject();
            wx.showToast({
                title:'wrong',
                duration:1500
            });
        }
    })   
  }
}

export default http1