import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CartInformationComponent = ({ quote, character, image }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.quote}>{quote}</Text>
            <Text style={styles.character}>- {character}</Text>
            {image ? <Image source={{ uri: image }} style={styles.image} resizeMode="contain" /> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
    },
    quote: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20,
    },
    character: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    image: {
        width: 250,
        height: 250,
        marginTop: 20,
        aspectRatio: 1,
    },
});

export default CartInformationComponent;