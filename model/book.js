import http1 from '../config1';

class Book extends http1 {
  getData() {
    return this.getModel({
      url: '/book/hot_list',
    });
  }
}

export default Book;
