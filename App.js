import React, {useEffect, useRef} from 'react';
import {Animated, View, FlatList, Text} from 'react-native';
import RotatingButton from './src/RotatingButton';
import FadeInView from './src/FadeInView';

const SlideInView = ({children}) => {
  // Step 1: Initialize the animation value
  const slideAnim = useRef(new Animated.Value(-1000)).current;

  useEffect(() => {
    // Step 2: Create the animation
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 500, // Adjust the duration as needed
      delay: 100, // Adjust the delay between each item
      useNativeDriver: true,
    }).start();
  }, [slideAnim]); // Make sure to include slideAnim in the dependency array

  // Step 3: Apply the animation to each item
  return (
    <Animated.View
      style={{
        transform: [{translateX: slideAnim}], // Apply the animated position value
      }}>
      {children}
    </Animated.View>
  );
};

const ListItem = ({item}) => {
  return (
    <SlideInView>
      <View style={{padding: 10}}>
        <Text style={{fontSize: 20, color: 'black'}}>{item.text}</Text>
      </View>
    </SlideInView>
  );
};

const YourListComponent = () => {
  const data = [
    {id: 1, text: 'Item 1'},
    {id: 2, text: 'Item 2'},
    {id: 3, text: 'Item 3'},
    {id: 4, text: 'Item 4'},

    // Add more items as needed
  ];

  return (
    <View style={{flex: 1}}>
      <Text style={{fontSize: 25, color: 'black'}}>Fade-In animation</Text>
      <FadeInView />

      <Text style={{fontSize: 25, color: 'black', marginTop: 20}}>
        Slide in animation
      </Text>
      <FlatList
        data={data}
        renderItem={({item}) => <ListItem item={item} />}
        keyExtractor={item => item.id.toString()}
      />
      <Text style={{fontSize: 25, color: 'black', marginTop: 25}}>
        Rotation animation
      </Text>
      <RotatingButton />
    </View>
  );
};

export default YourListComponent;
