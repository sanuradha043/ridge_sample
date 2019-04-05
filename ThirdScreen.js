import React,{ Component } from 'react';
import { View, Text,TouchableOpacity,StyleSheet,NavigationActions,ScrollView,Image,TextInput} from 'react-native';
import {StackActions} from 'react-navigation';



class CompareScreen extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        rating:'-1' ,
      };
     }

    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
      const {navigation} = this.props;
      const login_name = navigation.getParam('name','Anu');
     return (
        <View style={{flex: 1, alignItems: 'center'}}>
        <ScrollView>
            <Text style={{fontSize: 20,textAlign:"center",fontStyle: 'normal',color: 'blue',marginTop: 50}}>
             Hello {login_name}
            </Text>
            <Text style={{fontSize: 20,textAlign:"center",fontStyle: 'italic',color: 'red'}}>
            Give your comparison rating 
            </Text>
            <Text style={{fontSize: 15,textAlign:"center",fontStyle: 'italic',color: 'red'}}>
            (0 - 10 : 0 stands for "No match" and 10 for "Best match"):
            </Text>
            <View style={{flex:1,marginTop:32, alignItems:'center', justifyContent:'center'}}>
            <TextInput
                style={{height: 40, width: 200, textAlign:"center",borderColor: 'gray', borderWidth: 4, marginLeft:5}}
                onChangeText={(rating) => this.setState({rating})}
                value={this.state.rating}
            />
             </View>
            <TouchableOpacity style={{paddingLeft: 60, paddingRight: 60, marginTop: 10,}}
            onPress={() => this.props.navigation.navigate('Bye',{rating:this.state.rating,name:login_name})}>
            <Text style={{ fontSize: 20,color: '#841584', textAlign: 'center'}}>Confirm Rating </Text>
            </TouchableOpacity> 
            <Text style={{ fontSize: 20,color: 'coral',marginTop: 10, textAlign: 'center'}}>What you drew</Text>
            <View style={{width: 350, height: 350, backgroundColor: 'coral', marginTop: 10, alignItems: 'center'}} >
                <Image
                source={require('./images/Image1_modified.png')}
                />
            </View>
            <Text style={{ fontSize: 20,color: 'coral',marginTop: 10, textAlign: 'center'}}>Actual Image</Text>
            <View style={{width: 350, height: 350, backgroundColor: 'coral', marginTop: 10, alignItems: 'center'}} >
                <Image
                 source={require('./images/Image1.png')}
                />
            </View>
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
  export default CompareScreen;