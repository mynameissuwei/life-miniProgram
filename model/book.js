import http1 from '../config1';

class Book extends http1 {

  getData() {
    return this.getModel({
      url: '/book/hot_list',
    });
  }

  getDetail(bid) {
    return this.getModel({
      url:`/book/${bid}/detail`
    })
  }

  getComment(bid) {
    return this.getModel({
      url: `/book/${bid}/short_comment`
    })
  }

  getLikeStatus(bid) {
    return this.getModel({
      url:`/book/${bid}/favor`
    })
  }

  addComment(bid,comment) {
    return this.getModel({
      url:'/book/add/short_comment',
      data:{
        book_id:bid,
        content:comment
      },
      method:'POST'
    })
  }

}

export default Book;
