import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import React from 'react';
import Data from './data.json';
import Card from './components/Card/index';

function App() {
  const renderCard = ({item}) => <Card product={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>PatikaStore</Text>
      <TextInput style={styles.search} placeholder="Ara..." />
      <FlatList
        data={Data}
        renderItem={renderCard}
        keyExtractor={item => item.id.toString()}
        numColumns={2} // This sets the number of columns to 2
        columnWrapperStyle={styles.columnWrapper} // Optional: For additional styling of the row
        contentContainerStyle={styles.storeCard}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  storeCard: {
    paddingHorizontal: 2,
  },
  columnWrapper: {
    justifyContent: 'space-between', // To add space between columns
  },
  search: {
    backgroundColor: '#e2e2e2',
    color: 'gray',
    borderRadius: 10,
    height: 40,
    margin: 12,
    padding: 10,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 7,
  },
});

export default App;
