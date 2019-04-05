import React,{ Component } from 'react';
import { View, Text,TouchableOpacity,StyleSheet,NavigationActions,ScrollView} from 'react-native';
import { Timer } from 'react-native-stopwatch-timer';


class HelloScreen extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        rating:'-1' ,
        isTimerStart: true,
        timerDuration: 10000,
        timerReset: false,
      };
      this.startStopTimer = this.startStopTimer.bind(this);
      this.timerReset = this.resetTimer.bind(this);
    }
    startStopTimer() {
      this.setState({isTimerStart: !this.state.isTimerStart, timerReset: false});
    }
    resetTimer() {
      this.setState({isTimerStart: false, timerReset: true});
    }
    getFormattedTime(time) {
      this.currentTime = time;
    }
   
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
      const {navigation} = this.props;
      const login_name = navigation.getParam('name','Anu');
    //  const handleTimerComplete = () => this.props.navigation.navigate('Bye',{rating:this.state.rating,name:login_name});
      return (
        <View style={{flex: 1, backgroundColor: styles.backgroundColor, alignItems: 'center'}}>
        <ScrollView>
            <Text style={{fontSize: 20,textAlign:"center",fontStyle: 'normal',color: 'blue',marginTop: 50}}>
             Hello {login_name}
            </Text>
            <View style={{flex:1,marginTop:32, alignItems:'center', justifyContent:'center'}}>
              <Timer 
                  totalDuration={this.state.timerDuration} msecs 
                  //Time Duration
                  start={this.state.isTimerStart}
                  //To start
                  reset={this.state.timerreset}
                  //To reset
                // options={options}
                  //options for the styling
                  handleFinish={()=> this.props.navigation.navigate('Rate',{name:login_name})}
                  //can call a function On finish of the time 
                  getTime={this.getFormattedTime} />
            </View>
            <Text style={{ fontSize: 20,color: 'coral',marginTop: 10, textAlign: 'center'}}>Shapes to Choose From</Text>
            <View style={{width: 350, height: 100, backgroundColor: 'coral', marginTop: 10, alignItems: 'center'}} >
            </View>
            <Text style={{ fontSize: 20,color: 'coral',marginTop: 10, textAlign: 'center'}}>Create the picture</Text>
            <View style={{width: 350, height: 350, backgroundColor: 'coral', marginTop: 10, alignItems: 'center'}} >
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
  export default HelloScreen;