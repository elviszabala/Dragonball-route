import { ActivityIndicator, StyleSheet, FlatList, Image,ScrollView, SafeAreaView,
  StatusBar,} from 'react-native';
import { useEffect, useState } from 'react';


import { Characters, Item } from '../../interfaces/Characters';
import { View, Text } from 'react-native';
import { GetAllData } from '../../lib/dragonball';



// --- Mock Data: In a real app, this would come from an API ---
const mockData = {
  trending: [
    { id: '1', title: 'Kaiju No. 8', image: 'https://img1.ak.crunchyroll.com/i/spire4/8e6c73331c4f75478d1f215d5c1363f31713399990_main.jpg' },
    { id: '2', title: 'That Time I Got Reincarnated as a Slime', image: 'https://img1.ak.crunchyroll.com/i/spire1/1b5c45e3a63a131b2695a75965f9b5b91712015891_main.jpg' },
    { id: '3', title: 'Mushoku Tensei: Jobless Reincarnation', image: 'https://img1.ak.crunchyroll.com/i/spire1/7f3d2f254fbe2309139f60b9409f6b2b1712016027_main.jpg' },
    { id: '4', title: 'Black Butler -Public School Arc-', image: 'https://img1.ak.crunchyroll.com/i/spire1/e4f7cb9517f78c85cd518731d10202971712016578_main.jpg' },
  ],
  newEpisodes: [
    { id: '5', title: 'One Piece', image: 'https://img1.ak.crunchyroll.com/i/spire4/d6872ce66929d5bfe8a927a3c339799a1682597960_main.jpg' },
    { id: '6', title: 'Wonderful Precure!', image: 'https://img1.ak.crunchyroll.com/i/spire1/d1a155d3f82065819777174249a212371706505763_main.jpg' },
    { id: '7', title: 'My Hero Academia', image: 'https://img1.ak.crunchyroll.com/i/spire3/a65c2f7401a0cb63d76e4802c67b939f1712015797_main.jpg' },
    { id: '8', title: 'Case Closed (Detective Conan)', image: 'https://img1.ak.crunchyroll.com/i/spire2/2fac59740263f684fe2d1f7e11244ed21682598372_main.jpg' },
  ],
};


// --- Reusable Components ---

/**
 * A card component to display a single show with its image and title.
 */
const ShowCard = ({ item }) => (
  <View style={styles.cardContainer}>
    <Image source={{ uri: item.image }} style={styles.cardImage} />
    <Text style={styles.cardTitle} numberOfLines={2}>
      {item.title}
    </Text>
  </View>
);

/**
 * A horizontal carousel component that displays a list of shows.
 */
const Carousel = ({ title, data }) => (
  <View style={styles.carouselSection}>
    <Text style={styles.carouselTitle}>{title}</Text>
    <FlatList
      data={data}
      renderItem={({ item }) => <ShowCard item={item} />}
      keyExtractor={item => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.carouselList}
    />
  </View>
);

const ShowCardD = ({ item }) => (
  <View style={styles.cardContainer}>
    <Image source={{ uri: item.image }} style={styles.cardImage} />
    <Text style={styles.cardTitle} numberOfLines={2}>
      {item.name}
    </Text>
  </View>
);

/**
 * A horizontal carousel component that displays a list of shows.
 */
const CarouselD = ({ title, data }) => (
  <View style={styles.carouselSection}>
    <Text style={styles.carouselTitle}>{title}</Text>
    <FlatList
      data={data}
      renderItem={({ item }) => <ShowCardD item={item} />}
      keyExtractor={item => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.carouselList}
    />
  </View>
);


export default function TabOneScreen() {


  //const itemsArray = data?.items ? Object.values(data.items) : [];
    const [data, setData] = useState<Characters | null>(null);
      useEffect(() => {

    GetAllData().then(response => { 
        setData(response);
        
      })
   
  }, []);


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView>
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Search</Text>
            {/* Icons for search, cast, and profile would go here */}
        </View>
        <CarouselD title="DragonBall" data={data.items} />
        {/* <Carousel title="Trending Now" data={mockData.trending} />
        
        <Carousel title="New Episodes" data={mockData.newEpisodes} /> */}
        
        {/* You can add more carousels here */}
      </ScrollView>
    </SafeAreaView>
  );
}

// --- Styles ---

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141519', // Crunchyroll's dark background
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
  scrollView: {
    flex: 1,
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
    backgroundColor: '#333', // Placeholder color
    resizeMode: 'contain',
  },
  cardTitle: {
    color: '#ffffff',
    fontSize: 14,
    marginTop: 8,
  },
});
