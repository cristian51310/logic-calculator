import gql from 'graphql-tag'
import { typeDefs as typeDefsUsuario, resolvers as resolversUsuario } from './usuario.js'

const rootTypeDefs = gql`
  type Query{
    _: String
  }

  type Mutation{
    _: String
  }
`

export const typeDefs = [
  rootTypeDefs,
  typeDefsUsuario
]

export const resolvers = [
  resolversUsuario
]
