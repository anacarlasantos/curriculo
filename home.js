import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importe useNavigation

const home = () => {
  const navigation = useNavigation(); // Obtenha o objeto de navegação usando useNavigation

  return (
    <View style={styles.container}>
      <Text>Ana Carla Santos</Text>
      <Image source={require('../assets/avatar.png')} style={styles.image} />
      <Button
        title="Currículo"
        onPress={() => navigation.navigate('Curriculo')}
      />
      <Text style = {styles.paragraph}>
      Olá! Sou a Ana, estudante de Administração e Analista e desenvolvedora de Sistemas em formação. Minha jornada educacional abrange tanto a gestão quanto a tecnologia, preparando-me para desafios interdisciplinares. Um dos meus pilares é a comunicação eficaz, acredito que uma troca clara de ideias é vital para qualquer ambiente colaborativo.

    Desenvolvi um forte gosto por trabalhar em equipe, tirando o melhor das contribuições individuais para alcançar resultados coletivos excepcionais. Aprendo constantemente com os outros, considerando cada interação como uma oportunidade para crescimento.

    Atualmente, estou imersa no setor financeiro, onde tenho refinado minhas habilidades analíticas. Essa experiência tem me conduzido a um interesse crescente na análise de dados. Explorar conjuntos de dados em busca de insights valiosos e traduzi-los em estratégias é algo que me estimula.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create
(
    {
        container: 
        {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 32,
        },
        image: 
        {
            width: 200,
            height: 200,
            margin: 20,
            borderRadius: 100
        },
        paragraph:
        {
          textAlign: 'center',
          padding: 300,
          paddingTop: 50,
          paddingBottom: 0
        }
    }
);

export default home;