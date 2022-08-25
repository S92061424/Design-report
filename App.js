import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert,Image } from 'react-native';




const App = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.head}>
      To do List
       </Text>     
    </View>   
    <View style={styles.image}>
    <Image 
      style={styles.logo}
      source={{uri:"https://miro.medium.com/fit/c/294/294/1*8ygFKYb0Yo6Hc-vnScGA9A.png"}}
    />    
   </View>
   
    <View>     
      <View style={styles.fixToText}>
        <Button
          title="ADD"
          onPress={() => Alert.alert('You are going to add a new task!')}
          color='#191970'
        />
        <Button
          title="SAVE"
          onPress={() => Alert.alert('Changes are saved')}
          color='#191970'
        />
      </View>
    </View>
   
    <View style={styles.smallContainers}>
       <View style={styles.Scont}>   
         <View style={styles.checkbox}></View>                   
          <Text style={styles.tex}> Task 1</Text>    
          <View style={styles.circle1}></View>                 
       </View>
       <View style={styles.Scont}>
       <View style={styles.checkbox}></View>
            <Text style={styles.tex}> Task 2</Text>
            <View style={styles.circle1}></View> 
       </View>
       <View style={styles.Scont}>
       <View style={styles.checkbox}></View>
            <Text style={styles.tex}> Task 3</Text>
            <View style={styles.circle1}></View> 
       </View>
       <View style={styles.Scont}>
       <View style={styles.checkbox}></View>
            <Text style={styles.tex}> Task 4</Text>
            <View style={styles.circle1}></View> 
       </View>
       <View style={styles.Scont}>
       <View style={styles.checkbox}></View>
            <Text style={styles.tex}> Task 5</Text>
            <View style={styles.circle1}></View> 
       </View>

    </View>
 
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',  
    backgroundColor:'#f0f7ff',
    paddingLeft:20,
    paddingRight:20,
    paddingTop:33
  },
  head: {
    textAlign: 'left',
    fontSize: 28,
    color:'#191970',
    fontWeight:'bold',
    fontFamily:'monospace'
  
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo:{
    width:150,
    height:150,
    
  },
  image:{
  alignItems:'center'
  },
  Scont:{
    backgroundColor:'#FFFFFF',
    width:'100%',
    height:70,
    marginTop:30,
    flexDirection: 'row',
    borderRadius:6
    
  },
  
  tex:{
    color:'#191970',
    fontSize:25,  
    marginLeft:-15,
    marginTop:12
  },
  checkbox:{
    width:23,
    height:23,  
    borderColor:'#D3D3D3',
    borderWidth:3,
    flexDirection:"row",
    margin:17,
    borderRadius:2,
    marginTop:19
  },

  circle1:{
    width:15,
    height:15,   
    marginLeft:223,
    flexDirection:"row",
    marginTop:14,
    borderRadius:100,
    borderColor:'#9a5f6a',
    borderWidth:3
  }

});

export default App;