import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Title from './src/Components/Title';
import Navbar from './src/Components/NavBar';
import Footer from './src/Components/Footer';
import Content from './src/Components/Content';


function App(): JSX.Element {

  const [navigation, setNavigation] = useState('Home')


  return (
    <View style={styles.container}>
      <Title title={"Book Klup"}/>
      <Navbar items={"Jotain"} pressHandler={setNavigation}/>
      <Content value={navigation}/>
      <Footer prop='Jotain'/>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  }
});

export default App;
