class Product {
    
    constructor(id, productName, description, price, addedDate, active, productImgPath = '') {
      this.id = id;
      this.productName = productName;
      this.description = description;
      this.price = price;
      this.addedDate = addedDate;
      this.active = active;
      this.productImgPath = productImgPath;
    }
  
    toString() {
      return `Product { id: ${this.id}, productName: ${this.productName}, description: ${this.description}, price: ${this.price}, addedDate: ${this.addedDate.toISOString()}, active: ${this.active}, productImgPath: ${this.productImgPath} }`;
    }
  }
  
  export default Product;