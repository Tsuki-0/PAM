import { StyleSheet, Text, View, Button, Pressable, Image } from 'react-native';
import React, { useState } from 'react';
// You can import supported modules from npm
import { Card } from 'react-native-paper';
const imagens = {
  bruno: require('./assets/imagens/bruno.png'),
  skarmory: require('./assets/imagens/skarmory.png'),
  flygon: require('./assets/imagens/Flygon.png'),
  swampert: require('./assets/imagens/swampert.png'),
};

export default function Mudaimg() {
  const [imagem, SetImagem] = useState(imagens.bruno);
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        aperte os botões e veja a imagem mudar.
      </Text>
      <View style={styles.containerB}>
        <Image source={imagem} style={styles.pokeB} />
      </View>
      <View style={styles.containerB}>
        <Pressable style={styles.poke} onPress={() => SetImagem(imagens.skarmory)}>
          <Image source={imagens.skarmory} style={styles.poke} />
        </Pressable>
        <Pressable style={styles.poke} onPress={() => SetImagem(imagens.flygon)}>
          <Image source={imagens.flygon} style={styles.poke} />
        </Pressable>
        <Pressable style={styles.poke} onPress={() => SetImagem(imagens.swampert)}>
          <Image source={imagens.swampert} style={styles.poke} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  containerB: {
    flex: 1,
    gap: 15,
    justifyContent: 'center',
    maxHeight: '150px',
    flexDirection: 'row',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  poke: {
    width: 70,
    height: 70,
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor: 'black'
  },
  pokeB: {
    width: 100,
    height: 100,
    borderWidth: 3,
    borderRadius: 10,
    backgroundColor: 'black'
  },
});
