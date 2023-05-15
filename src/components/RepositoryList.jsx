import { FlatList, View,  Pressable } from 'react-native'
import RepositoryItem from './RepositoryItem'
import SortBar from './SortBar'
import Filter from './Filter'
import useRepositories from '../hooks/useRepositories'
import { useNavigate } from 'react-router-native'
import theme from '../theme'

export const ItemSeparator = () => <View style={theme.separator} />

export const RepositoryListContainer = ({ repositories, onEndReach }) => {
  const navigate = useNavigate()

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : []

  const renderItem = ({ item }) => (
    <Pressable onPress={() => navigate(`/repositories/${item.id}`)}>
      <RepositoryItem repository={item} />
    </Pressable>
  )

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
      ListHeaderComponent={() => <SortBar />}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  )
}

const RepositoryList = () => {
  const { repositories, fetchMore } = useRepositories()

  const onEndReach = () => {
    fetchMore()
  }

  return (
    <>
      <Filter />
      <RepositoryListContainer
        repositories={repositories}
        onEndReach={onEndReach}
      />
    </>
  )
}

export default RepositoryList
