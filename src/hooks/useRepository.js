import { useQuery } from '@apollo/client'
import { GET_REPOSITORY } from '../graphql/queries'

const useRepository = (id) => {
  const { data, loading, fetchMore, refetch, ...result } = useQuery(
    GET_REPOSITORY,
    {
      variables: {
        id,
        first: 5
      },
      fetchPolicy: 'cache-and-network'
    }
  )

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data?.repository.reviews.pageInfo.hasNextPage

    if (!canFetchMore) {
      return
    }

    fetchMore({
      variables: {
        id,
        after: data.repository.reviews.pageInfo.endCursor
      }
    })
  }

  const repository = data?.repository

  return {
    repository,
    loading,
    fetchMore: handleFetchMore,
    refetch,
    ...result
  }
}

export default useRepository
