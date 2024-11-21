import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackHome from './App/navigation/StackHome';

export default function App() {
  return (
    <NavigationContainer>
      <StackHome />
    </NavigationContainer>
  );
}