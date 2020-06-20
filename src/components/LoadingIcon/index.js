import React from 'react';
import {ActivityIndicator} from 'react-native';
import {PRIMARY_COLOR_DARK} from 'react-native-dotenv';

const LoadingIcon = () => {
  return <ActivityIndicator size="large" color={PRIMARY_COLOR_DARK} />;
};

export default LoadingIcon;
