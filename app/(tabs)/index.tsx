import { ActivityIndicator, StyleSheet, FlatList, Image, SafeAreaView, Dimensions, useWindowDimensions } from 'react-native';
import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { GetAllData } from '../../lib/dragonball';
import { Characters, Item } from '../../interfaces/Characters';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Character } from '../../interfaces/Character';




export default function TabOneScreen() {

  const [data, setData] = useState<Characters | null>(null);
  const {width, height} = useWindowDimensions();

  useEffect(() => {

    GetAllData().then(response => { 
        setData(response);
        
      })
   
  }, []);
  //const itemsArray = data?.items ? Object.values(data.items) : [];
  const Carousel = ({ data }: { data: Character[] }) => (
    <View style={styles.carouselSection}>
      
      <FlatList
        data={data}
        renderItem={({ item }) => <ShowCardD item={item} />}
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.carouselList}
      />
    </View>
  );
  const ShowCardD = ({ item }: { item: Character }) => (
    <View style={{ ...styles.cardContainer, width: width * 0.9 }}>
      
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <Text style={styles.textContainer} >
        <Text style={styles.cardTitle} numberOfLines={1}>
          {"Name: " + item.name}
        </Text>
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Dragon Ball Characters</Text>
      </View>
    <View style={styles.container}>
      { data?.items === null ? (
        //<ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      ) : (

        <Carousel data={data?.items as Character[] ?? []} />
    /*    <FlatList
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

      /> */

      ) }
      

    </View>
  </SafeAreaView>
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
    width: 150, // Adjust width based on screen size
    marginRight: 12,
    //backgroundColor: 'pink',
    padding: 8,
    flexDirection: 'row',
    //alignItems: 'center',

  },
  cardImage: {
    width: 150,
    height: 225,
    borderRadius: 4,
    backgroundColor: '#333',
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
    marginLeft: 12, // spacing between image and text
},
  cardTitle: {
    color: '#ffffff',
    fontSize: 14,
    marginTop: 8,
    flexDirection: 'row',
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