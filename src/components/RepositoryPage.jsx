import { FlatList, View, StyleSheet, Linking } from 'react-native'
import { useParams } from 'react-router-native'
import RepositoryItem from './RepositoryItem'
import ReviewItem from './ReviewItem'
import useRepository from '../hooks/useRepository'
import Text from './Text'
import Button from './Button'
import theme from '../theme'
import { ItemSeparator } from './RepositoryList'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginLeft: 50,
    marginRight: 50
  }
})

const renderItem = ({ item }) => <ReviewItem review={item} />

const RepositoryInfo = ({ repository }) => {
  const handleLink = () => {
    Linking.openURL(repository.url)
  }

  return (
    <View>
      <RepositoryItem repository={repository} />
      {repository.url && (
        <View style={styles.container}>
          <Button onPress={handleLink} text='Open GitHub' />
        </View>
      )}
      {repository.reviews.length !== 0 ? (
        <View style={theme.separator}></View>
      ) : null}
    </View>
  )
}

const RepositoryPage = () => {
  const { id } = useParams()
  const { repository, loading, fetchMore } = useRepository(id)

  if (loading) {
    return <Text>Loading...</Text>
  }
  const reviews = repository.reviews.edges

  const onEndReach = () => {
    fetchMore()
  }

  return (
    <FlatList
      data={reviews}
      renderItem={renderItem}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  )
}
export default RepositoryPage
