import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchAPI, result, errorMessage] = useResults();

    return <View>
        <SearchBar term={term}
            onTermChange={setTerm}
            onTermSumbit={() => searchAPI(term)} />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <Text>Find {result.length} result</Text>
    </View>
};

const styles = StyleSheet.create({});

export default SearchScreen;