import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Product = {
  __typename?: 'Product';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  vars?: Maybe<Scalars['String']>;
  vat?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  products?: Maybe<Array<Maybe<Product>>>;
  singleProduct?: Maybe<Product>;
};


export type QuerySingleProductArgs = {
  MyId?: InputMaybe<Scalars['Int']>;
};

export type ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsQuery = { __typename?: 'Query', products?: Array<{ __typename?: 'Product', id?: string | null, name?: string | null, description?: string | null, price?: number | null, vat?: number | null, vars?: string | null, image?: string | null } | null> | null };

export type SingleProductQueryVariables = Exact<{
  MyId?: InputMaybe<Scalars['Int']>;
}>;


export type SingleProductQuery = { __typename?: 'Query', singleProduct?: { __typename?: 'Product', id?: string | null, name?: string | null, description?: string | null, price?: number | null, vat?: number | null, vars?: string | null, image?: string | null } | null };


export const ProductsDocument = gql`
    query Products {
  products {
    id
    name
    description
    price
    vat
    vars
    image
  }
}
    `;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductsQuery(baseOptions?: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
      }
export function useProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsQueryResult = Apollo.QueryResult<ProductsQuery, ProductsQueryVariables>;
export const SingleProductDocument = gql`
    query SingleProduct($MyId: Int) {
  singleProduct(MyId: $MyId) {
    id
    name
    description
    price
    vat
    vars
    image
  }
}
    `;

/**
 * __useSingleProductQuery__
 *
 * To run a query within a React component, call `useSingleProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleProductQuery({
 *   variables: {
 *      MyId: // value for 'MyId'
 *   },
 * });
 */
export function useSingleProductQuery(baseOptions?: Apollo.QueryHookOptions<SingleProductQuery, SingleProductQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SingleProductQuery, SingleProductQueryVariables>(SingleProductDocument, options);
      }
export function useSingleProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SingleProductQuery, SingleProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SingleProductQuery, SingleProductQueryVariables>(SingleProductDocument, options);
        }
export type SingleProductQueryHookResult = ReturnType<typeof useSingleProductQuery>;
export type SingleProductLazyQueryHookResult = ReturnType<typeof useSingleProductLazyQuery>;
export type SingleProductQueryResult = Apollo.QueryResult<SingleProductQuery, SingleProductQueryVariables>;