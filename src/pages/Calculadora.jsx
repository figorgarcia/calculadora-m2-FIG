import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Botao from '../components/Botao'

export default function Calculadora() {

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
      setResultado(primeiroNumero + segundoNumero)
    }else if(operador === '-'){
      setResultado(primeiroNumero - segundoNumero)
    }else if(operador === '*'){
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
        <Botao texto={1} quandoClicado={setarNumero}/>
        <Botao texto={2} quandoClicado={setarNumero} />
        <Botao texto={3} quandoClicado={setarNumero} />
      </View>

      <View style={{ flexDirection: 'row', width: '100%' }}>
        <Botao texto={'+'} quandoClicado={selecionaOperacao}/>
        <Botao texto={'-'} quandoClicado={selecionaOperacao}/>
        <Botao texto={'*'} quandoClicado={selecionaOperacao}/>
      </View>

      <View style={{ flexDirection: 'row', width: '100%' }}>
        <Botao texto={'='} quandoClicado={calcularResultado} />
        <Botao texto={'C'} quandoClicado={limpar} />
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
  }
});
