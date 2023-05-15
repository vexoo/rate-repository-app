import { useContext } from 'react'
import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../graphql/queries'
import SortContext from '../contexts/SortContext'
import SearchContext from '../contexts/SearchContext'

const queryParameters = {
  latest: { orderBy: 'CREATED_AT', orderDirection: 'ASC' },
  highest: { orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' },
  lowest: { orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' }
}

const useRepositories = () => {
  const { sortOption } = useContext(SortContext)
  const { filter } = useContext(SearchContext)
  const { orderBy, orderDirection } = queryParameters[sortOption]

  const { data, loading, error, refetch, fetchMore, ...result } = useQuery(
    GET_REPOSITORIES,
    {
      fetchPolicy: 'cache-and-network',
      variables: {
        orderBy,
        orderDirection,
        searchKeyword: filter,
        first: 6
      }
    }
  )

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage

    if (!canFetchMore) {
      return
    }

    fetchMore({
      variables: {
        orderBy,
        orderDirection,
        searchKeyword: filter,
        after: data.repositories.pageInfo.endCursor
      }
    })
  }

  const repositories = data?.repositories

  return {
    repositories,
    loading,
    error,
    refetch,
    fetchMore: handleFetchMore,
    ...result
  }
}

export default useRepositories
