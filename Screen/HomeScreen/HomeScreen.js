import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  Animated
} from 'react-native';
import { Ionicons, MaterialCommunityIcons, MaterialIcons, } from "react-native-vector-icons"
import colors from "../../Constant/Colors";
import categories from "../../Constant/Categories"
import styles from './Styles';

const scrollA = new Animated.Value(0);

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
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

        <Animated.View style={{...styles.header, elevation}}>
          <View style={styles.burgerMenu}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("About")} style={{ width: '100%', height: '100%' }}>
              <View style={styles.btnBurger}>
                <View style={styles.barOne}></View>
                <View style={styles.barTwo}></View>
                <View style={styles.barThree}></View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.where}>
            <Ionicons name="location" size={23} color={colors.grisFonce} />
            <Text style={styles.textLocation}>Anjouan, Comores</Text>
          </View>

          <TouchableOpacity activeOpacity={0.7} style={styles.profil}>
            <Image style={styles.profilImage} source={require("../../assets/image/profil.jpg")} />
          </TouchableOpacity>
        </Animated.View>

        <Animated.ScrollView 
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollA } } }],
            { useNativeDriver: true }
          )}
          scrollEventThrottle={16}
          contentContainerStyle={styles.scrollView} >
          <View style={styles.introduction}>
            <Text style={styles.textintro}>Trouves ton endroit favoris</Text>
            <Text style={styles.textintro}>Aux <Text style={styles.comoros}>Comores</Text></Text>
          </View>

          <FlatList
            data={categories}
            contentContainerStyle={styles.flatlistCategorie}
            horizontal
            bounces={false}
            bouncesZoom={false}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              if (item.id == 1) {
                return <TouchableOpacity activeOpacity={0.6} style={styles.touchableCategories}>
                  <MaterialIcons name={item.icon} size={40} color={colors.bleupluclaire} />
                  <Text style={styles.textCategories}>{item.name}</Text>
                </TouchableOpacity>
              }

              return <TouchableOpacity activeOpacity={0.6} style={styles.touchableCategories}>
                <MaterialCommunityIcons name={item.icon} size={42} color={colors.bleupluclaire} />
                <Text style={styles.textCategories}>{item.name}</Text>
              </TouchableOpacity>
            }}
          />

          <View style={styles.eventContainer}>
            <View style={styles.eventContainertitle}>
              <Text style={styles.titleCategorie}>Evenement à venir</Text>
              <TouchableOpacity>
                <Text style={styles.seeAll}>Tout voir</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={categories}
              horizontal
              contentContainerStyle={styles.flatlistCategorie}
              bounces={false}
              bouncesZoom={false}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) =>
                <TouchableOpacity activeOpacity={0.6} style={styles.touchableEvent}>
                  <Image resizeMode="cover" style={styles.imageEvent} source={require("../../assets/image/comores.jpg")} />
                  <View style={styles.eventsInfo}>
                    <View style={styles.typeAndDate}>
                      <Text style={styles.type}>{item.name}</Text>
                      <Text style={styles.separator}>  |  </Text>
                      <Text style={styles.date}>17 juillet 2020</Text>
                    </View>
                    <View style={styles.titleEvent}>
                      <Text style={styles.titleEventText}>Medina Festival</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              }
            />
          </View>

          <View style={styles.eventContainer}>
            <View style={styles.eventContainertitle}>
              <Text style={styles.titleCategorie}>Prêt de toi</Text>
              <TouchableOpacity>
                <Text style={styles.seeAll}>Tout voir</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={categories}
              horizontal
              contentContainerStyle={styles.flatlistCategorie}
              bounces={false}
              bouncesZoom={false}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) =>
                <TouchableOpacity activeOpacity={0.7} style={styles.touchableEvent}>
                  <Image resizeMode="cover" style={styles.imageEvent} source={require("../../assets/image/comores.jpg")} />
                  <View style={styles.eventsInfo}>
                    <View style={styles.placeNameContainer}>
                      <Text numberOfLines={2} style={{...styles.type, flex: 0.9}}>Baragge Pascal</Text>
                      <MaterialCommunityIcons name="dots-vertical" size={25} color={colors.grisFonce} style={{right: -10}} />
                    </View>
                    <View style={styles.titleEvent}>
                      <Text numberOfLines={2} style={styles.titleEventText}>Hombo Pascal</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              }
            />
          </View>

          <View style={styles.eventContainer}>
            <View style={styles.eventContainertitle}>
              <Text style={styles.titleCategorie}>Nouveau</Text>
              <TouchableOpacity>
                <Text style={styles.seeAll}>Tout voir</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={categories}
              horizontal
              contentContainerStyle={styles.flatlistCategorie}
              bounces={false}
              bouncesZoom={false}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) =>
                <TouchableOpacity activeOpacity={0.7} style={styles.touchableEvent}>
                  <Image resizeMode="cover" style={styles.imageEvent} source={require("../../assets/image/comores.jpg")} />
                  <View style={styles.eventsInfo}>
                    <View style={styles.placeNameContainer}>
                      <Text numberOfLines={2} style={{...styles.type, flex: 0.9}}>Baragge Pascal</Text>
                      <MaterialCommunityIcons name="dots-vertical" size={25} color={colors.grisFonce} style={{right: -10}} />
                    </View>
                    <View style={styles.titleEvent}>
                      <Text numberOfLines={2} style={styles.titleEventText}>Hombo Pascal</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              }
            />
          </View>

        </Animated.ScrollView>
      </View>
    );
  }
}

export default HomeScreen;
