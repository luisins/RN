// In App.js in a new project

import * as React from 'react';
import { View, Text, Button  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FetchExample from './Components/ApiComponent';
import Axiosapi from './Components/Axiosapicomponent';

function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
        <Button
          title="Go to Api"
          onPress={() => navigation.navigate('Api')}
        />
        <Button
          title="Go to Api with Axios"
          onPress={() => navigation.navigate('Axios')}
        />
      </View>
    );
  }

  function DetailsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => navigation.push('Details')}
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

  function ApiScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Api Screen</Text>
        <FetchExample></FetchExample>
      </View>
    );
  }

  function AxioScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Api with Axios</Text>
        <Axiosapi></Axiosapi>
        
      </View>
    );
  }

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Api" component={ApiScreen} />
        <Stack.Screen name="Axios" component={AxioScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;