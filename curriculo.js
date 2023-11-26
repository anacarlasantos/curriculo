import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const curriculo = () => {
  return (
    <View style = {styles.container}>
      <View style = {styles.section}>
        <Text style = {styles.sectionHeading}>Informações Pessoais</Text>
        <Text>Nome: Ana Carla Santos</Text>
        <Text>23 anos</Text>
        <Text>Recife - PE</Text>
        <Text>Email: ana.santos@edu.pe.senac.br</Text>
        <Text>LinkedIn: @AnaCarlaSantos</Text>
      </View>

      <View style = {styles.section}>
        <Text style = {styles.sectionHeading}>EXPERIÊNCIAS PROFISSIONAIS</Text>
        <Text>Estagio Finaceiro-UFPE(2021-2023)</Text>
        <Text>Estagio Financeiro-Tempest(2023-Atual)</Text>
      </View>

      <View style = {styles.section}>
        <Text style = {styles.sectionHeading}>FORMAÇÃO</Text>
        <Text>UFPE -Administração (2019.2 - Atual)</Text>
        <Text>SENAC - Tecnólogo em Análise e Desenvolvimento de Sistemas (2022.2 - Atual)</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeading}>CERTIFICAÇÕES</Text>
        <Text>Curso Excel- Coursera</Text>
        <Text>HTML E CSS - CURSO EM VÍDEO</Text>
        <Text>Scrum Foundation Professional- CertiProf</Text>
        <Text>JAVA - CURSO EM VÍDEO</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeading}>IDIOMAS</Text>
        <Text>Inglês – Fluente</Text>
        <Text>Espanhol - Básico</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default curriculo;