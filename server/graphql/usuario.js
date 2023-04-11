import gql from 'graphql-tag'
import Usuario from '../models/Usuario.js'
import { createJWT } from '../util/auth.js'

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
    ) : CreateUsuarioResponse

    deleteUsuario(
      _id: ID!
    ) : Usuario

    login(
      user: String,
      password: String
    ) : String
  }

  type CreateUsuarioResponse {
    usuario: Usuario
    jwt: String
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
      const saveduser = await usuario.save()
      const token = createJWT({ _id: usuario._id, name: usuario.name, user: usuario.user })
      console.log(token)
      return {
        usuario: saveduser,
        jwt: token
      }
    },

    login: async (_, { user, password }) => {
      const logeduser = await Usuario.findOne({ user })
      if (!logeduser || password !== logeduser.password) {
        throw new Error('Credenciales Invalidas')
      }
      const token = createJWT({ _id: logeduser._id, name: logeduser.name, user: logeduser.user })
      return token
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
