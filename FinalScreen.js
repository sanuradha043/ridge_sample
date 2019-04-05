import React,{ Component } from 'react';
import { View, Text,TouchableOpacity,StyleSheet,NavigationActions,ScrollView,Image,TextInput} from 'react-native';
import {StackActions} from 'react-navigation';


class ByeScreen extends Component {
    constructor(props) {
        super(props);
      }
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
      const {navigation} = this.props;
      const login_name = navigation.getParam('name','Anu');
      const user_rating = navigation.getParam('rating','-1');
      return (
        <View style={{flex: 1, backgroundColor: styles.backgroundColor, alignItems: 'center'}}>
        <ScrollView>
           <Text style={{fontSize: 25,textAlign:"center",fontStyle: 'normal',color: 'blue',marginTop: 50}}>
             Hello {login_name}
            </Text>
            <Text style={{fontSize: 25,textAlign:"center",fontStyle: 'normal',color: 'orange',marginBottom: 50}}>
            Thank you for comparing the images
            </Text>
            <Text style={{fontSize: 25,textAlign:"center",fontStyle: 'normal',color: 'orange', marginBottom: 50}}>
            The comparison rating given by you is {user_rating}
            </Text>
            <TouchableOpacity style={{ paddingRight: 60, marginTop: 10}}
            onPress={() => this.props.navigation.navigate('Home')}>
            <Text style={{ fontSize: 20,color: '#841584', textAlign: 'left'}}> Go Back Home</Text>
            </TouchableOpacity> 
        </ScrollView>
          </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'ivory',
      alignItems: "center",
      justifyContent: 'flex-start',
    },
  });
  export default ByeScreen;