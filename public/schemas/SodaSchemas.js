// the typdef version of schema.graphql
export const typeDef = `
type Soda {
  id: String!
  soda: SodaInfo!
}

type SodaInfo {
  productName: String!
  description: String!
  cost: Float!
  maximumQuantityToVend: Int!
}

type Status {
  productName: String!
  maximumQuantityToVend: Int!
}

type Query {
  getMachineQuantities: [Status]
  getAllSodas: [Soda]
  getSoda(id: String!): Soda
}


input SodaInfoInput {
  productName: String!
  description: String!
  cost: Float!
  maximumQuantityToVend: Int!
}

type Mutation {
  updatePrice(id: String!, cost: Float!): Soda
  restockSoda(id: String!, additionalStock: Int = 0): Soda
  addNewSoda(soda: SodaInfoInput!): Soda
}
`;
