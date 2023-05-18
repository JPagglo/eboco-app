import React, {useState} from 'react';
import { SafeAreaView, View, Text, StyleSheet, KeyboardAvoidingView, TextInput, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  return (
    <SafeAreaView style={style.container}>
      <KeyboardAvoidingView>
        <View style={style.content}>
          <Text style={style.title}>Entrar</Text>
          <Text style={style.subtitle}>Entrar com sua conta</Text>
        </View>

        <View>
          <View style={{flexDirection:'row'}}>
          <MaterialCommunityIcons name="email-outline" size={24} color="black" />
          <TextInput style={style.email}
            placeholder='E-mail'
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          </View>

          <View style={{flexDirection:'row'}}>
          <Ionicons name="key" size={24} color="black" />
          <TextInput style={style.password}
          placeholder='Password'
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          />
          </View>
        </View>
        <Pressable style={style.button}>
          <Text style={style.textButton}>Acessar</Text>
        </Pressable>

        <Pressable 
        onPress={() => navigation.navigate("Register")}
        style={{marginTop:20}}
        >
          <Text style={style.message}>Não possui uma conta? Clique aqui.</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}



const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    padding: 50,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  title: {
    fontSize: 30,
    color: '#702963',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#702963',
    fontWeight: 'bold',
  },
  email: {
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    width: 300,
    flexDirection:'row',
    marginVertical: 10,
  },
  password:{
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    width: 300,
    marginVertical: 10,
  },
  button:{
    width:80,
    backgroundColor:'#795AFA',
    paddingLeft:15,
    padding:10,
    borderRadius:8,
    marginTop:50,
    alignSelf:'center'
  },
  textButton:{
    color:'#ffffff',
    fontWeight:'600'
  },
  message:{
    fontSize:17,
    color:"gray",
    textAlign:"center",
    fontWeight:"400",
  },
})