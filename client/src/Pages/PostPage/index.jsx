//import liraries
import React, {useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CollaboratorsPosts from '../../Components/PostsComponent/CollaboratorsPosts/index'
import Header from '../../Components/PostsComponent/Header/index'

// create a component
const Posts = () => {
      return (
        <View style={styles.container}>
            <Header/>
            <CollaboratorsPosts/>
            
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Posts;
