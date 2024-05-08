import React, { useRef } from 'react';
import { Animated, TouchableOpacity, View } from 'react-native';

const RotatingButton = () => {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  const rotateButton = () => {
    Animated.timing(
      rotateAnim,
      {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }
    ).start(() => {
      Animated.timing(
        rotateAnim,
        {
          toValue: 0,
          duration: 0,
          useNativeDriver: true,
        }
      ).start();
    });
  };

  const rotation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <TouchableOpacity onPress={rotateButton}>
      <Animated.View
        style={{
          transform: [{ rotate: rotation }],
          width: 100,
          height: 100,
          backgroundColor: 'green',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf:'center',
          marginBottom:70,
          marginTop:15
        }}
      >
        {/* You can add button content here */}
        <View>
          {/* Example: You can add an icon or text */}
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default RotatingButton;
