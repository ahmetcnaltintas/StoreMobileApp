import {Image, Text, View} from 'react-native';
import React from 'react';
import styles from './Card.style';

const Card = ({product}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.productImage}
        source={{
          uri: product.imgURL,
        }}
      />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>{product.price}</Text>
      <Text style={styles.stock}>
        {product.inStock === true ? '' : 'Stokta Yok'}
      </Text>
    </View>
  );
};

export default Card;
