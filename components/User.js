import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'

export const CURRENT_USER_QUERY = gql`
  query {
    authenticatedItem {
      ... on User {
        id
        email
        name
      }
    }
  }
`

export function useUser(params) {
  const { data } = useQuery(CURRENT_USER_QUERY)
  return data?.authenticatedItem
}
