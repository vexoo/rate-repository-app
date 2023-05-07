import { View, StyleSheet, ScrollView } from 'react-native'
import Constants from 'expo-constants'
import theme from '../theme'
import AppBarTab from './AppBarTab'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBar,
  },
  tabContainer: {
    flexDirection: 'row',
		justifyContent: 'center',
    flexGrow: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.tabContainer}>
        <AppBarTab label='Repositories' path='/' />
        <AppBarTab label='Sign in' path='/signin' />
      </ScrollView>
    </View>
  );
};

export default AppBar
