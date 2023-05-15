import { FlatList, View, StyleSheet, Alert } from 'react-native'
import { useQuery, useMutation } from '@apollo/client'
import Text from './Text'
import Button from './Button'
import { GET_USER } from '../graphql/queries'
import { delete_review } from '../graphql/mutations'
import { ItemSeparator } from './RepositoryList'
import ReviewItem from './ReviewItem'
import { useNavigate } from 'react-router-native'

const UserReviewButtons = ({ review, refetch }) => {
  const styles = StyleSheet.create({
    buttonContainer: {
      flexDirection: 'row',
      padding: 5,
      marginLeft: 70
    }
  })
  const [deleteReview] = useMutation(delete_review)
  const navigate = useNavigate()

  const handleDelete = async () => {
    Alert.alert(
      'Delete review',
      'Are you sure you want to delete this review?',
      [
        {
          text: 'CANCEL'
        },
        {
          text: 'DELETE',
          onPress: async () => {
            await deleteReview({
              variables: {
                deleteReviewId: review.node.id
              }
            })
            await refetch()
          }
        }
      ]
    )
  }

  return (
    <View style={styles.buttonContainer}>
      <Button
        onPress={() => navigate(`/repositories/${review.node.repository.id}`)}
        text='View repository'
      />
      <Button onPress={handleDelete} text='Delete review' color='red' />
    </View>
  )
}

const UserReviews = () => {
  const { loading, error, data, refetch } = useQuery(GET_USER, {
    fetchPolicy: 'cache-and-network',
    variables: {
      includeReviews: true
    }
  })

  if (loading) {
    return <Text>Loading...</Text>
  }

  if (error) {
    console.log(error)
    return <Text>Something went wrong...</Text>
  }

  const reviews = data.me.reviews.edges

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => (
        <>
          <ReviewItem review={item} />
          <UserReviewButtons review={item} refetch={refetch} />
        </>
      )}
      ItemSeparatorComponent={ItemSeparator}
    />
  )
}

export default UserReviews
