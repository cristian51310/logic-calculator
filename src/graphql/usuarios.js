import { gql } from '@apollo/client'

export const GET_ALL_USUARIOS = gql`
  query{
    usuarios {
      _id
      name
      user
      password
    }
  }
`

export const GET_USUARIO = gql`
  query($id: ID!){
    usuario(_id: $id) {
      _id
      name
      user
      password
    }
  }
`

export const DELETE_USUARIO = gql`
  mutation($id: ID!){
    deleteUsuario(_id: $id) {
      _id
    }
  }
`

export const CREATE_USUARIO = gql`
  mutation($name: String!, $user: String!, $password: String!){
  createUsuario(name: $name, user: $user, password: $password) {
    usuario {
      _id
    }
  }
}
`
