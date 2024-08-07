export default class ProductDTO {
    constructor(productName, description, price, addedDate) {
      this.productName = productName;
      this.description = description;
      this.price = price;
      this.addedDate = addedDate;
    }
  
    toString() {
      return `ProductDTO { productName: ${this.productName}, description: ${this.description}, price: ${this.price}, addedDate: ${this.addedDate} }`;
    }
  }