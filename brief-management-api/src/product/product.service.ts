import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductDTO } from 'src/dto/product.dto';
import { Product } from 'src/entity/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {}

  private entityToDTO(product: Product): ProductDTO {
    const productDTO = new ProductDTO();
    productDTO.id = product.id;
    productDTO.name = product.name;
    return productDTO;
  }

  public async getAll() {
    const products: Product[] = await this.productRepository.find();
    return products.map((x) => this.entityToDTO(x));
  }
}
