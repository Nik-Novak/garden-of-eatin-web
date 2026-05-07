// lib/get-query-client.ts
import { QueryClient, defaultShouldDehydrateQuery, environmentManager, isServer } from '@tanstack/react-query'

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  })
}

let browserQueryClient: QueryClient | undefined = undefined

export function getQueryClient() {
  if (environmentManager.isServer()) {
    // Server: always make a new query client
    return makeQueryClient()
  } else {
    // Browser: make a new query client if we don't already have one
    if (!browserQueryClient) browserQueryClient = makeQueryClient()
    return browserQueryClient
  }
}