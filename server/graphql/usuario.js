import gql from 'graphql-tag'
import Usuario from '../models/Usuario.js'

export const typeDefs = gql`
  extend type Query{
    usuarios: [Usuario] 
    usuario(_id: ID!): Usuario
  }

  extend type Mutation{
    createUsuario(
      name: String!
      user: String!,
      password: String!
    ) : Usuario

    deleteUsuario(
      _id: ID!
    ) : Usuario
  }

  type Usuario{
    _id: ID!
    name: String!
    user: String!
    password: String!
    createdAt: String
    updatedAt: String
  }
`

export const resolvers = {
  Query: {
    usuarios: async () => await Usuario.find(),
    usuario: async (_, { _id }) => await Usuario.findById(_id)
  },

  Mutation: {
    createUsuario: async (_, { name, user, password }) => {
      const usuario = new Usuario({ name, user, password })
      const savedusuario = await usuario.save()
      return savedusuario
    },

    deleteUsuario: async (_, { _id }) => {
      const deletedusuario = await Usuario.findByIdAndDelete(_id)
      if (!deletedusuario) {
        throw new Error('Usuario no encontrado')
      } else {
        return deletedusuario
      }
    }
  }
}
