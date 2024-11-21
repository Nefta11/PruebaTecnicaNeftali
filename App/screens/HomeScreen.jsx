import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import CartInformationComponent from '../components/CartInformationComponent';
import ButtonNextComponent from '../components/ButtonNextComponent';
import LoaderComponent from '../components/LoaderComponent';
import { fetchQuote } from '../utils/Api';

const HomeScreen = () => {
    const [quote, setQuote] = useState('');
    const [character, setCharacter] = useState('');
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(true);

    const getQuote = async () => {
        setLoading(true);
        try {
            const data = await fetchQuote();
            setQuote(data.quote);
            setCharacter(data.character);
            setImage(data.image);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getQuote();
    }, []);

    return (
        <View style={styles.container}>
            {loading ? (
                <LoaderComponent isVisible={loading} text="Cargando datos..." />
            ) : (
                <>
                    <CartInformationComponent quote={quote} character={character} image={image} />
                    <ButtonNextComponent onPress={getQuote} />
                </>
            )}
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default HomeScreen;