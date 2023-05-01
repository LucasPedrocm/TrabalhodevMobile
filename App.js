import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import CardFilme from './src/components/CardFilme';
import { SafeAreaView } from 'react-native-web';

export default function App() {

  let [filmes, setFilmes] = useState([]);

  const baseURL = 'https://api.otaviolube.com/api/filmes?populate=*';

  useEffect(function(){
    fetch(baseURL)
      .then(data => data.json())
      .then(objeto => {
        console.log(objeto);
        setFilmes(objeto.data);
      })
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView horizontal>
      { filmes.length > 0 ? filmes.map(filme => <CardFilme key={filme.id} filme={filme.attributes}/>) : <Text>Carregando ...</Text>} 
      <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9370db',
    justifyContent: 'center',
  },
});
