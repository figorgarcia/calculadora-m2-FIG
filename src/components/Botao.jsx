import React from 'react'
import {Text, TouchableOpacity, StyleSheet} from 'react-native'

export default function Botao(props) {
    return(
        <TouchableOpacity style={styles.botao} onPress={() => props.quandoClicado(props.texto)}>
            <Text style={{ fontSize: 70 }}>{props.texto}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  botao: { backgroundColor: '#ccc', padding: 10, borderRadius: 20, flex: 1, alignItems: 'center' }
});