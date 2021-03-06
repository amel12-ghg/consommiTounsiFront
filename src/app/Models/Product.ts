import { UnderCategory } from './UnderCategory';

export class Product {
  idProduct: number;
  descriptionProduct: string;
  titleProduct: string;
  quantityProduct: number;
  buyingPriceProduct: number;
  priceProduct: number;
  weightProduct: number;
  maxQuantityProduct: number;
  fileName: string;
  barcodeProduct: string;
  underCategory: UnderCategory;
  likes: number;
  reduction: number;
}
