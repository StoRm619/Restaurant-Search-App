import React from 'react';
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
    </View>
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginTop: 15,
        flexDirection: 'row',
        marginBottom: 10
    },
    inputStyle: {
        flex: 1,
        fontSize: 30
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;