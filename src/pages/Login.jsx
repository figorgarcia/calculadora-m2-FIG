import React, { useState } from 'react'
import {View, Text, TextInput, Button, Alert} from 'react-native'

export default function Login() {

    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')

    function entrarNoSistema(){
        Alert.alert('Entrou!', `Seu usário é ${usuario}`)
    }

    return (
        <View style={{padding: 10, flex:1, justifyContent:'center', alignItems: 'center'}}>
            <Text>Usuário:</Text>
            <TextInput style={{
                width: '100%',
                height: 50,
                borderWidth: 1
            }}
                onChangeText={setUsuario}
            />

            <Text>Senha:</Text>
            <TextInput style={{
                width: '100%',
                height: 50,
                borderWidth: 1,
                marginBottom: 10
            }}
                secureTextEntry={true}
                onChangeText={setSenha}
            />

            <Button title='Entrar' onPress={entrarNoSistema}/>

            <Text>{usuario}</Text>
        </View>
    )

}