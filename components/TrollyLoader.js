import React from 'react';
import LottieView from 'lottie-react-native'; 

const TrollyLoader = () => {
  return ( 
    <LottieView style={{width:200, height:200}} source={require('../assets/images/trolly.json')} autoPlay loop />
  );
};

export default TrollyLoader;
