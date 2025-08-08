// graphql/queries.ts
import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      name
      category
      description
      price
      image
      images
      details
      stock
    }
  }
`;
export const GET_PRODUCT_BY_ID = gql`
  query GetProductById($id: ID!) {
    product(id: $id) {
      id
      name
      category
      description
      price
      image
      images
      details
      stock
    }
  }
`;

export const GET_BANNERS = gql`
  query GetBanners {
    banners {
    id
    alt
    image
  }
}
`;
export const GET_BANNERS_PROGRAMS = gql`
  query GetBannersPrograms {
    bannersPrograms {
    id
    alt
    image
  }
}
`;