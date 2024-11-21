import React from 'react';
import { ActivityIndicator, Modal, StyleSheet, Text, View } from 'react-native';

const LoaderComponent = ({ isVisible = false, text = '' }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => {}}
    >
      <View style={styles.overlay}>
        <View style={styles.vista}>
          <ActivityIndicator size="large" color="#007BFF" style={styles.activityIndicator} />
          {text && <Text style={styles.text}>{text}</Text>}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  vista: {
    width: '65%',
    height: '17.5%',
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  activityIndicator: {
    transform: [{ scale: 1.5 }], 
  },
  text: {
    color: 'black',
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
});

export default LoaderComponent;