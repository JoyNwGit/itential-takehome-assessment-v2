import { gql } from "apollo-boost";

const GET_ALL_SODAS = gql`
query testGettingSodas {
  getAllSodas {
    id
    soda {
      description
    }
  }
}`

const GET_A_SODA = gql`
query getASoda($id: String!) {
  getSoda(id: $id)
  {
    id
    soda {
      productName
      description
      cost
      maximumQuantityToVend
    }
  }
}`

const GET_QUANTITIES = gql`
query Quantities {
  getMachineQuantities
  {
    productName
    maximumQuantityToVend
  }
}`

const UPDATE_COST_OF_A_SODA = gql`
mutation testUpdateCost($id: String!, $cost: Float) {
  updatePrice(id: $id, cost: $cost)
  {
    id
    soda {
      productName
      cost
    }
  }
}`


const UPDATE_STOCK = gql`
mutation testRestocking($id: String!, $additionalStock: Int) {
  restockSoda(id: $id, additionalStock: $additionalStock) {
    id
    soda {
      maximumQuantityToVend
    }
  }
}`

const ADD_NEW_SODA = gql`
mutation testAddingASoda(
  $productName: String!,
  $description: String!,
  $cost: Float!,
  $maximumQuantityToVend: Int!) {
  addNewSoda(soda: {
    productName: $productName
    description: $description
    cost: $cost
    maximumQuantityToVend: $maximumQuantityToVend
  })
  {
    id
    soda
    {
      productName
      description
      cost
      maximumQuantityToVend
    }
  }
}`;

export {
  GET_ALL_SODAS,
  GET_A_SODA,
  GET_QUANTITIES,
  UPDATE_COST_OF_A_SODA,
  UPDATE_STOCK,
  ADD_NEW_SODA
}
