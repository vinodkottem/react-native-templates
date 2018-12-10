import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SectionList
} from 'react-native';
import { CheckBox } from 'react-native-elements'

export default class SectionListExample extends Component {

  constructor(props) {
    super(props);
    this.state = {
      checked:true,
      
      data:[
        {
          title:"A", 
          data:[
            {key:1, name:'Apple',type:'AA'},
            {key:2, name:'Amla',type:'AA'},
          ]
        },
        {
          title:"B", 
          data:[
            {key:1, name:'Banana',type:'BB'},
            {key:2, name:'Beans',type:'BB'},
          ]
        },
        {
          title:"C", 
          data:[
            {key:1, name:'Carrot',type:'CC'},
          ]
        },
        {
          title:"D", 
          data:[
            {key:1, name:'Dates',type:'DD'},
          ]
        },
      ]
    }
  }
 
  press =(value,type) =>{
    console.log(value,type)
  }

  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={this.state.data}
          renderSectionHeader={({section}) => {
            return (
              <View style={styles.titleContainer}>
                <Text style={styles.title}>
                  {section.title}
                </Text>
              </View>
            )
          }}
          renderItem={({item}) => {
            return (
            <View style={styles.container}>
              <View style={styles.content}>
                <View style={styles.contentHeader}>
                  <Text  style={styles.name}>{item.name}</Text>
                 <CheckBox checked={this.state.checked} onPress={() => this.press(item.name,item.type)} />
                </View>
              </View>
            </View>
            )
        }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleContainer:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor:"#DCDCDC",
    padding:10
  },
  title:{
    fontSize:25,
    color:"#000000"
  },
  container: {
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  content: {
    marginLeft: 16,
    flex: 1,
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6
  },
  name:{
    fontSize:16,
    fontWeight:"bold",
  },
});
 