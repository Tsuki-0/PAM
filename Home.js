import {React} from "react-native";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from "react";
export default function Home() {
  const [nome, setNome] = useState('');
  const [imageSource, setImageSource] = useState('');
  function trocarimagem(){
    if(nome === "Ricardo"){
        setImageSource(require('../img/img01.jpg'))
    }
    if (nome === null){
        setImageSource(require('../img/Six Seven'))
    }
  }  
  return (
    <View style={styles.container}>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#666',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
