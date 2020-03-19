import 'react-native-gesture-handler';
import React from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';
//import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios';


export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    
        
    // AXIOS LOGIN CONFIRM //

    
      var data = {"User": "FactMaidana1", "Password": "f6I8h7MiPgoB9iXCD6jCtw=="}

      const headers = {
        'Content-Type': 'application/json' ,
        'authapi' : '600af00b453352e261c13549d37f49a735062bf194b74dccc09ffd4cb1f87d12' ,
        'channel' : 'WB'
      }

      axios.post('http://10.13.99.201:80/api/login_user_confirm', data, {
          headers: headers
        })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  } 



  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
           <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
        <Text> Nombre: {this.state.dataSource.data.Name}</Text>
        
        
        


      </View>
    );
  }
}