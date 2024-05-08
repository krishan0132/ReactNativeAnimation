import React, { useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';

const FadeInView = () => {
  // Step 1: Initialize the animation value
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 1000, // Adjust the duration as needed
        useNativeDriver: true,
      }
    ).start();
}, [fadeAnim]); // Make sure to include fadeAnim in the dependency array


  return (
    // Step 3: Apply the animation to your component
    <Animated.View
      style={{
        opacity: fadeAnim, // Apply the animated opacity value
        // You can also apply other styles here
      }}
    >
      {/* Your component content goes here */}
      <View style={{ width: 150, height: 150, backgroundColor: 'blue',alignSelf:'center' }} />
    </Animated.View>
  );
};

export default FadeInView;

