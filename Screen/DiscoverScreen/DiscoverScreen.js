import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Animated,
  FlatList,
  Image
} from 'react-native';
import { Feather, AntDesign } from "react-native-vector-icons"
import categories from '../../Constant/Categories';
import colors from '../../Constant/Colors';
import styles from './Styles';

const scrollA = new Animated.Value(0);

class DiscoverScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderHeader() {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate("Search")} activeOpacity={0.9} style={styles.searchBtn}>
          <Text style={styles.searchText}>Faites une recherche</Text>
          <Feather name="search" size={25} color={colors.grisFonce} />
      </TouchableOpacity>
    )
  }

  render() {

    const elevation = scrollA.interpolate({
      inputRange: [0, 10, 20, 30],
      outputRange: [0, 2, 4, 8],
      extrapolate: 'clamp',
    })

    return (
      <View style={styles.container}>

        <StatusBar barStyle="dark-content" translucent={true} backgroundColor="rgba(0,0,0,0.04)" />

        <Animated.View style={{ ...styles.header, elevation }}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Feather name="arrow-left" size={25} color={colors.dark} />
          </TouchableOpacity>

          <View style={styles.where}>
            <Text style={styles.textLocation}>Découvrir</Text>
          </View>

          <View>
          </View>
        </Animated.View>

        <Animated.FlatList
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollA } } }],
            { useNativeDriver: true }
          )}
          scrollEventThrottle={16}
          ListHeaderComponent={this.renderHeader()}
          data={categories}
          contentContainerStyle={styles.flatlistCategorie}
          bounces={false}
          bouncesZoom={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) =>
            <View style={styles.card}>
              <View style={styles.profil}>
                <TouchableOpacity activeOpacity={0.7}>
                  <Image style={styles.profilImage} source={require("../../assets/image/profil.jpg")} />
                </TouchableOpacity>
                <View style={{flex: 1}}>
                  <Text numberOfLines={2} style={styles.nameProfil}><Text style={styles.name}>Pablito</Text> a un nouvelle place favorites</Text>
                  <Text style={styles.timestamp}>mar 17 avr 2022 à 19h58</Text>
                </View>
              </View>

              <TouchableOpacity activeOpacity={0.8} style={styles.imageContainer}>
                <Image resizeMode="cover" style={styles.imagePost} source={require("../../assets/image/comores.jpg")} />
              </TouchableOpacity>

              <View style={styles.cardFooter}>
                <Text style={styles.title}>Mont ntringui a Anjouan</Text>
                <View style={styles.btnContainer}>
                  <TouchableOpacity style={styles.btnTouchable} activeOpacity={0.7}>
                    <AntDesign name="hearto" size={25} color={colors.grisFonce} />
                    <Text style={styles.numberLikes}>12k</Text>
                  </TouchableOpacity>                   
                  <TouchableOpacity onPress={() => this.props.navigation.navigate("Comment")} style={styles.btnTouchable} activeOpacity={0.7}>
                    <AntDesign name="message1" size={25} color={colors.grisFonce} />
                    <Text style={styles.numberLikes}>1k</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.btnTouchable} activeOpacity={0.7}>
                    <AntDesign name="sharealt" size={25} color={colors.grisFonce} />
                    <Text style={styles.numberLikes}>200</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          }
        />

      </View>
    );
  }
}

export default DiscoverScreen;
