import React from 'react'
import { View, StyleSheet } from 'react-native'
import theme from '../theme'
import Text from './Text'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15
  },
  ratingContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15
  },
  rating: {
    color: theme.colors.primary,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.subheading
  },
  textContainer: {
    flexShrink: 1
  },
  name: {
    fontWeight: theme.fontWeights.bold,
    marginBottom: 5
  },
  date: {
    color: theme.colors.textSecondary,
    marginBottom: 5
  },
  text: {
    marginBottom: 5
  },
  buttonContainer: {
    flexDirection: 'row',
    padding: 5,
    marginLeft: 10
  }
})

const ReviewItem = ({ review }) => {
  const name = review.node.user?.username
    ? review.node.user.username
    : review.node.repository?.fullName

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>{review.node.rating}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.date}>
            {new Date(review.node.createdAt).toLocaleDateString()}
          </Text>
          <Text style={styles.text}>{review.node.text}</Text>
        </View>
      </View>
    </View>
  )
}

export default ReviewItem
