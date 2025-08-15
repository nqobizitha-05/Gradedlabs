import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useState } from 'react';
export default function App() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const [loginMessage, setLoginMessage] = useState('')
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogin = ()=>{
    if(!password || !username){
      setLoginMessage('Enter Valid login details');
      setLoggedIn(false);
    }
    else{
      if(password == '1234' && username == 'admin'){
        setLoginMessage('Login successful');
        setLoggedIn(true);
      }
      else{
        setLoginMessage("Invalid username or password.")
        setLoggedIn(false);
      }
    }

    
  }

  
  return (
    <View style={styles.container}>

      <Text style={styles.Text}>Welcome, please log in</Text>
      <Text style={loggedIn ? {color: '#02870dff'} : {color: '#ff0000ff'}}>{loginMessage}</Text>
      <TextInput placeholderTextColor={'#bdbdbdff'} placeholder='username' style={styles.inputField} value={username} onChangeText={text => setUsername(text)}></TextInput>

      <TextInput placeholderTextColor={'#bdbdbdff'} placeholder='password' secureTextEntry={true} style={styles.inputField} value={password} onChangeText={text => setPassword(text)}></TextInput>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={{color: '#fff'}}>Login</Text>
      </TouchableOpacity>

      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20'
  },
  button: {
    backgroundColor: '#ff6b00',
    width: '80%',
    height: '5%',
    borderRadius: '5%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  inputField: {
    borderColor: 'gray',
    borderWidth: '1',
    borderRadius: '5',
    width: '80%',
    marginVertical:'5',
    padding: '10'
  },
  Text: {
    color: '#000000ff',
    fontSize: 25
  }
});
