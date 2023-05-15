import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import ItemDetails from './ItemDetails'
import ItemTitle from './ItemTitle'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: 15,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5
  },
  infoContainer: {
    display: 'flex',
    marginLeft: 10,
    flexGrow: 1
  },
  detailsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 5,
    marginLeft: -60
  }
})

const RepositoryItem = ({ repository }) => (
  <View testID='repositoryItem' style={styles.container}>
    <Image style={styles.avatar} source={{ uri: repository.ownerAvatarUrl }} />
    <View style={styles.infoContainer}>
      <ItemTitle repository={repository} />
      <View style={styles.detailsContainer}>
        <ItemDetails value={repository.stargazersCount} label='Stars' />
        <ItemDetails value={repository.forksCount} label='Forks' />
        <ItemDetails value={repository.reviewCount} label='Reviews' />
        <ItemDetails value={repository.ratingAverage} label='Rating' />
      </View>
    </View>
  </View>
)

export default RepositoryItem
