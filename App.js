import * as React from 'react';
import { useState } from 'react';
import { Button, View, Text, TextInput, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';


function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
      />
  );
}

function generarToken(){
  return (
      axios.post('http://10.12.21.38:80/api/auth_api')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);

      })
      .catch((error) =>{
        console.error(error);
      })
  )
  
}

function HomeScreen({ route, navigation }) {
  
  const [ nameh , setNameh ] = useState();

  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
      setNameh('Laleli');
    }
  }, [route.params?.post]);


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', {itemId: 86, name: 'Pepe', nameHeader: {nameh} })}
      />
      <Button
        title="Create post"
        onPress={() => navigation.navigate('CreatePost')}
      />
      <Button
        title="Ir a perfil"
        onPress={() => navigation.navigate('Profile', {nameT: 'Titulo del perfil' })}
      />
      <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
      <Button
        title="Generar Token"
        onPress={() => navigation.navigate('Profile', {nameT: generarToken() })}
      />
    </View>
  );
}

function CreatePostScreen({ navigation, route }) {
  const [postText, setPostText] = React.useState('');

  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          // Pass params back to home screen
          navigation.navigate('Home', { post: postText });
        }}
      />
    </>
  );
}

function DetailsScreen( { route, navigation } ) {
  const { itemId } = route.params;
  const { name } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hola: {JSON.stringify(name)}</Text>
      <Text> Articulo N°: {JSON.stringify(itemId)} </Text>
      
      <Button
        title="Go to More Details"
        onPress={() => navigation.navigate('MoreDetails')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />

      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />

    </View>
  );
}

function MoreDetailsScreen( {route, navigation} ) {
  const { itemId } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>More Details Screen</Text>
      <Text>Item N°: {JSON.stringify(itemId)}</Text>
      <Button
        title="Go to More Details... again"
        onPress={() => navigation.push('MoreDetails')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

function PerfilScreen( { route, navigation } ) {
  
  const { nameT } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hola: {JSON.stringify(nameT)} </Text>
      <Button
        title="Actualizar el title"
        onPress={() => navigation.setOptions({ title: 'Actualizado!' })}
      />
    </View>
    
  )
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={
           {  headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              }
          }
        }>
        <Stack.Screen name="Home"
          component={HomeScreen}
          options={{
            title:'El Home',
            headerTitle: props => <LogoTitle {...props} />,
            headerRight: () => (
            <Button
              onPress={() => alert('YA TENES CORONA VIRUS :(')}
              title="TOCAR"
              color="black"
            />
          ),

          }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={({ route }) => ({ title: route.params.nameh })}/>
        <Stack.Screen name="MoreDetails" component={MoreDetailsScreen} options={{ title:'Mas Detalles' }} initialParams= {{ itemId: 99 }} />
        <Stack.Screen name="CreatePost" component={CreatePostScreen} />
        <Stack.Screen name="Profile" component={PerfilScreen} options={({ route }) => ({ title: route.params.nameT })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;