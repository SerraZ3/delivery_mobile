import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

import {RED_COLOR} from 'react-native-dotenv';

const NotFound = ({message}) => {
  const [delay, setDelay] = useState(false);
  useEffect(() => {
    let mounted = true;
    const runDelay = async () => {
      if (mounted) {
        setTimeout(() => {
          setDelay(true);
        }, 2000);
      }
    };
    if (!delay) runDelay();
    return () => (mounted = false);
  }, []);
  return delay ? (
    <View style={{alignItems: 'center', marginTop: 20}}>
      <Text style={{color: RED_COLOR, fontSize: 18}}>
        {message ? message : 'Nenhum item encontrado'}
      </Text>
    </View>
  ) : null;
};

export default NotFound;
