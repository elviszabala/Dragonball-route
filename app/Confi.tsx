import React from 'react'
import { Text, View } from '@/components/Themed';

export default function confi() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Confi modal test</Text>
      <View style={{ marginVertical: 30, height: 1, width: '80%' }} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text>Test cofi modal</Text>
    </View>
    
  )
}
