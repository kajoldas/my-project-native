import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link, NativeRouter, Route, Routes } from 'react-router-native';
import Home from './Componet/Home';
import pages from './Componet/pages';
import Techers from './Componet/Techers';





export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar 
            backgroundColor="blue"
            barStyle="light-content"
      />

      
      <Text > working on your app!</Text>
      <Text> Hi my name is  kazoli</Text>
      <StatusBar style="auto" />
      <NativeRouter>
         <Link to="/"><Text>Home</Text></Link>
         <Link to="/home"><Text>Home</Text></Link>
         <Link to="/techers"><Text>Electric Car</Text></Link>
         <Link to="/pages"><Text>Login</Text></Link>
         <Routes>
            <Route path="/" element ={<Home></Home>}></Route>
            <Route path="/home" element ={<Home></Home>}></Route>
            <Route path="/techers" element ={<Techers></Techers>}></Route>
            <Route path="/techers" element ={<pages></pages>}></Route>
            
         </Routes>
      </NativeRouter>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D81B60',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
