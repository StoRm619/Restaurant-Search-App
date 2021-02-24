import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/Resultlist';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchAPI, result, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        //price === $|| $$||$$$
        return result.filter(result => {
            return result.price === price;
        });
    };

    return (
        <>
            <SearchBar term={term}
                onTermChange={setTerm}
                onTermSumbit={() => searchAPI(term)} />
            {errorMessage ? <Text>{errorMessage}</Text> : null}

            <ScrollView>
                <ResultList result={filterResultsByPrice('$')} title="Cost Effective" />
                <ResultList result={filterResultsByPrice('$$')} title="Bit Pricer" />
                <ResultList result={filterResultsByPrice('$$$')} title="Big Spender" />
            </ScrollView>
        </>
    )
};

const styles = StyleSheet.create({});

export default SearchScreen;