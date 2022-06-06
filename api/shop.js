export default {
  // getProducts(cb) {
  //   setTimeout(() => cb(_products), 100)
  // },

  buyProducts(products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      Math.random() > 0.5 ? cb() : errorCb()
    }, 100)
  },
}
