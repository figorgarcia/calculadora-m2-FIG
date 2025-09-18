import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  function quandoClicar(){
    console.log('FULANO')
  }

  return (
    <View style={styles.container}>

      <View style={{flexDirection:'row'}}>
        <Text style={styles.font50}>1</Text>
        <Text style={styles.font50}>+</Text>
        <Text style={styles.font50}>2</Text>
        <Text style={styles.font50}>=</Text>
        <Text style={styles.font50}>3</Text>
      </View>

      <View style={{flexDirection: 'row', width:'100%'}}>
        <TouchableOpacity style={styles.botao}>
          <Text style={{fontSize:70}}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao}>
          <Text style={{fontSize:70}}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao}>
          <Text style={{fontSize:70}}>1</Text>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row', width:'100%'}}>
        <TouchableOpacity style={styles.botao}>
          <Text style={{fontSize:70}}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao}>
          <Text style={{fontSize:70}}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao}>
          <Text style={{fontSize:70}}>*</Text>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row', width:'100%'}}>
        <TouchableOpacity style={styles.botao}>
          <Text style={{fontSize:70}}>=</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao}>
          <Text style={{fontSize:70}}>C</Text>
        </TouchableOpacity>
      </View>

      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  font50: {
    fontSize: 70
  },
  botao: {backgroundColor:'#ccc',padding:10, borderRadius: 20, flex:1, alignItems: 'center'}
});
