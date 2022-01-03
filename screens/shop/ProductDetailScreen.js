import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  ScrollView,
} from 'react-native';

const ProductDetailScreen = props => {
  const product = props.navigation.getParam('product');
  return (
    <View>
      <Text>The product detail Screen!</Text>
      <Text>{product.title}</Text>
    </View>
  );
};

ProductDetailScreen.navigationOptions = navData => {
  return {
    headerTitle: navData.navigation.getParam('product').title,
  };
};

const styles = StyleSheet.create({});

export default ProductDetailScreen;
