import React from 'react';
import {View, TextInput,StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons'; 

const SearchBar = ({term, onTermChange}) =>{
    return <View style = {styles.backgroundStyle}>
        <Feather name="search"  style = {styles.iconStyle}/>
        <TextInput 
        autoCapitalize='none'
        autoCorrect={false}
        placeholder= "Search"
         style = {styles.inputStyle}
         value={term}
         onChangeText={newTerm => onTermChange(newTerm)}/>
    </View>
};

const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor:'#F0EEEE',
        height:50,
        borderRadius:5,
        marginHorizontal:15,
        flexDirection:'row',
     
    },
    inputStyle:{
    fontSize:18,
        flex:1
    },
    iconStyle:{
        color:'black',
        fontSize:35,
        alignSelf:'center'
    }
});

export default SearchBar;