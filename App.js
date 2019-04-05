import React,{ Component } from 'react';
import { Platform, StatusBar, StyleSheet, View, AppRegistry, Text,TextInput,Button,TouchableOpacity } from 'react-native';
import {StackActions,createStackNavigator, createAppContainer} from 'react-navigation';
import HelloScreen from './SecondScreen';
import ByeScreen from './FinalScreen';
import CompareScreen from './ThirdScreen';


class LoginTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
 // static navigationOptions = ({ navigation }) => SetNavOptions('Topics', navigation)
  static navigationOptions = ({ navigation }) =>{
    title: 'Welcome'
  };
  render() {
    const {navigate} = this.props.navigation;
    return ( 
        <View style={styles.container}>
            <Text style={{fontSize: 30,textAlign:"left",fontStyle: 'normal',color: 'blue',marginTop: 100, marginBottom: 50}}>
             Input User name :
            </Text>
            <TextInput
                style={{height: 40, width: 200, textAlign:"center",borderColor: 'gray', borderWidth: 4, marginLeft:5}}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
            />
            <TouchableOpacity style={{backgroundColor: 'ivory', paddingLeft: 60, paddingRight: 60, marginTop: 10,}}
            onPress={() => this.props.navigation.navigate('Hello',{name:this.state.text})}>
            <Text style={{ fontSize: 20,color: '#841584', textAlign: 'center'}}>Go to Next Screen </Text>
            </TouchableOpacity> 
           
        </View>
    );
  }
}


const Mynavigator = createStackNavigator({ /*establishes navigation routes*/
  Home: {
    screen: LoginTextInput,
  },
  Hello: {
    screen: HelloScreen,
  },
  Bye: {
    screen: ByeScreen,
  },
  Rate: {
    screen: CompareScreen,
  },
}, {
    initialRouteName: 'Home',
    headerMode: 'none'
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'ivory',
    alignItems: "center",
    justifyContent: 'flex-start',
  },
});

/* AppRegistry.registerComponent(
  'firstapp',
  () => LoginTextInput);
 */
export default createAppContainer(Mynavigator); /*Shows screen*/

