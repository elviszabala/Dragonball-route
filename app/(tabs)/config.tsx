import React from 'react'
import { Text, View } from '@/components/Themed';

export default function config() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Config</Text>
      <View style={{ marginVertical: 30, height: 1, width: '80%' }} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text>Path: app/(tabs)/index.tsx</Text>
    </View>
    
  )
}
