import React from 'react';
<<<<<<< HEAD
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSumbit }) => {
    return <View style={styles.backgroundStyle}>
        <Feather name="search" color="black" style={styles.iconStyle} />
        <TextInput style={styles.inputStyle}
            autoCapitalize='none'
            autoComplete={false}
            placeholder="Search"
            value={term}
            onChangeText={newTerm => onTermChange(newTerm)}
            onEndEditing={() => onTermSumbit()} />
=======
import {View, TextInput,StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons'; 

const SearchBar = ({term, onTermChange, onTermSumbit}) =>{
    return <View style = {styles.backgroundStyle}>
        <Feather name="search"  style = {styles.iconStyle}/>
        <TextInput 
        autoCapitalize='none'
        autoCorrect={false}
        placeholder= "Search"
         style = {styles.inputStyle}
         value={term}
         onChangeText={onTermChange}
         onEndEditing={onTermSumbit}
         />
>>>>>>> 5d81bdcb68a016a991da70c1ea420e6bbe582594
    </View>
};

const styles = StyleSheet.create({
<<<<<<< HEAD
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginTop: 15,
        flexDirection: 'row'
    },
    inputStyle: {
        flex: 1,
        fontSize: 30
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
=======
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
>>>>>>> 5d81bdcb68a016a991da70c1ea420e6bbe582594
    }
});

export default SearchBar;