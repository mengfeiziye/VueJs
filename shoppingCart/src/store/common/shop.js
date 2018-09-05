const _products = [
  {'id': 1, 'title': 'iPad 4 Mini', 'price': 500.01, 'inventory': 2},
  {'id': 2, 'title': 'H&M T-Shirt White', 'price': 10.99, 'inventory': 10},
  {'id': 3, 'title': 'Charli XCX - Sucker CD', 'price': 19.99, 'inventory': 5}
];

export default {
  getProducts(cb) {
    setTimeout(() => cb(_products), 100);
  },
  buyProducts(products, cb, errorCb) {
    setTimeout(() => {
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
       ? cb()
       : errorCb();
    }, 100);
  }
};

// 注：PhantomJS 是一个基于 Webkit 的服务器端 JavaScriptAPI。它全面支持 web 而不需要浏览器支持，其快速，原生支持各种 web 标准：Dom处理，CSS选择器，JSON，Canvas，和 SVG。
