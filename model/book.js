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

}

export default Book;
