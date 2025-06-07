import { ActivityIndicator, StyleSheet, FlatList, Image } from 'react-native';
import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { GetAllData } from '../../lib/dragonball';
import { Characters, Item } from '../../interfaces/Characters';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';




export default function TabOneScreen() {

  const [data, setData] = useState<Characters | null>(null);

  useEffect(() => {

    GetAllData().then(response => { 
        setData(response);
        
      })
   
  }, []);
  //const itemsArray = data?.items ? Object.values(data.items) : [];


  return (
    <View style={styles.container}>
      { data?.items === null ? (
        //<ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      ) : (
       <FlatList
        data={data?.items}
        keyExtractor={(item: Item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image
              source={{ uri: item.image }}
              style={{ width: 150, height: 300, borderRadius: 25 }}
              resizeMode= 'contain'
              />
            <Text style={{ color: '#ffffff' }}>{item.name}</Text>
            </View>
        )}

      />

      ) }
      

    </View>
  );
}

// --- Styles (with new styles for DetailsScreen) ---

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141519',
  },
  header: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  carouselSection: {
    marginBottom: 24,
  },
  carouselTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  carouselList: {
    paddingHorizontal: 16,
  },
  cardContainer: {
    width: 150,
    marginRight: 12,
  },
  cardImage: {
    width: '100%',
    height: 225,
    borderRadius: 4,
    backgroundColor: '#333',
  },
  cardTitle: {
    color: '#ffffff',
    fontSize: 14,
    marginTop: 8,
  },
  // --- Details Screen Styles ---
  detailsImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  detailsContent: {
    padding: 16,
  },
  detailsTitle: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  detailsDescription: {
    color: '#d4d4d4',
    fontSize: 16,
    lineHeight: 24,
  },
});