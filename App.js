import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [primeiroNumero, setPrimeiroNumero] = useState('')
  const [segundoNumero, setSegundoNumero] = useState('')
  const [operador, setOperador] = useState('')
  const [controleNumero, setControleNumero] = useState(1)
  const [resultado, setResultado] = useState(0)

  function setarNumero(numero) {
    if (controleNumero == 1) {
      setPrimeiroNumero(primeiroNumero + numero)
    } else {
      setSegundoNumero(segundoNumero + numero)
    }
  }

  function selecionaOperacao(operacao) {
    setOperador(operacao)
    setControleNumero(2)
  }

  function limpar() {
    setPrimeiroNumero('')
    setSegundoNumero('')
    setOperador('')
    setControleNumero(1)
  }

  function calcularResultado(){
    if(operador === '+'){
      //soma
      setResultado(primeiroNumero + segundoNumero)
    }else if(operador === '-'){
      // subtração
      setResultado(primeiroNumero - segundoNumero)
    }else if(operador === '*'){
      // multiplicação
      setResultado(primeiroNumero * segundoNumero)
    }
    limpar()
  }




  return (
    <View style={styles.container}>

      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.font50}>{primeiroNumero}</Text>
        <Text style={styles.font50}>{operador}</Text>
        <Text style={styles.font50}>{segundoNumero}</Text>
      </View>

      <View style={{ flexDirection: 'row', width: '100%' }}>
        <TouchableOpacity style={styles.botao} onPress={() => setarNumero(1)}>
          <Text style={{ fontSize: 70 }}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => setarNumero(2)}>
          <Text style={{ fontSize: 70 }}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => setarNumero(3)}>
          <Text style={{ fontSize: 70 }}>3</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row', width: '100%' }}>
        <TouchableOpacity style={styles.botao} onPress={() => selecionaOperacao('+')}>
          <Text style={{ fontSize: 70 }}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => selecionaOperacao('-')}>
          <Text style={{ fontSize: 70 }}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => selecionaOperacao('*')}>
          <Text style={{ fontSize: 70 }}>*</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row', width: '100%' }}>
        <TouchableOpacity style={styles.botao} onPress={()=> calcularResultado()}>
          <Text style={{ fontSize: 70 }}>=</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => limpar()}>
          <Text style={{ fontSize: 70 }}>C</Text>
        </TouchableOpacity>
      </View>

      <Text style={{fontSize:80, color: 'red'}}>{resultado}</Text>

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
  botao: { backgroundColor: '#ccc', padding: 10, borderRadius: 20, flex: 1, alignItems: 'center' }
});
