import { gql } from '@apollo/client'

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          fullName
          description
          language
          ownerAvatarUrl
          stargazersCount
          forksCount
          reviewCount
          ratingAverage
        }
      }
    }
  }
`

export const GET_USER = gql`
  query {
    me {
      id
      username
    }
  }
`