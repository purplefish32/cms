import { InMemoryCache } from '@apollo/client'
import { concatPagination } from '@apollo/client/utilities'

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        feeds: concatPagination(),
        // boards: {
        //   merge(existing = [], incoming: any[]) {
        //     return [...existing, ...incoming]
        //   },
        // },
      },
    },
  },
})