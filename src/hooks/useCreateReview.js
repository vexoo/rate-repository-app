import { useMutation } from '@apollo/client'
import { create_review } from '../graphql/mutations'

const useCreateReview = () => {
  const [mutate, result] = useMutation(create_review)

  const createReview = async ({
    ownerName,
    repositoryName,
    rating,
    text
  }) => {
    const { data } = await mutate({
      variables: {
        review: { ownerName, repositoryName, rating: Number(rating), text }
      }
    })
    console.log(data)

    return data
  }

  return [createReview, result]
}

export default useCreateReview
