import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultDetail from '../components/ResultsDetail';

const ResultList = ({ title, result, navigation }) => {


    return <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={result}
            keyExtractor={(result) => result.id}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate('Result', { id: item.id })}>
                        <ResultDetail result={item} />
                    </TouchableOpacity>
                )
            }}
        />

    </View>
};
const styles = StyleSheet.create({
    container: {
        marginBottom: 15
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15
    }

});
export default withNavigation(ResultList);