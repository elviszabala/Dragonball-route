import { ActivityIndicator, StyleSheet, FlatList, Image } from 'react-native';
import { useEffect, useState } from 'react';

import EditScreenInfo from '@/components/EditScreenInfo';
//import { Text, View } from '@/components/Themed';
import { View, Text } from 'react-native';
import { GetAllData } from '../lib/dragonball';
//import { FlatList } from 'react-native-reanimated/lib/typescript/Animated';
//import { Characters, Item } from '../../Interfaces/Characters';

import { Characters, Item } from '../interfaces/Characters';




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
            <Text>{item.name}</Text>  
            </View>
        )}
        
      />

      ) }
      
        
     
      
     
      
      
      
      
      


    


     

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
    item: {
    backgroundColor: '',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    paddingLeft: 0,
  },
});
