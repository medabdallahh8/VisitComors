import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Animated,
    FlatList,
    Image,
    TextInput
} from 'react-native';
import { Feather, FontAwesome } from "react-native-vector-icons"
import categories from '../../Constant/Categories';
import colors from '../../Constant/Colors';
import styles from './Styles';

const scrollA = new Animated.Value(0);

class CommentScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: ""
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

                <Animated.View style={{ ...styles.header, elevation }}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Feather name="arrow-left" size={25} color={colors.dark} />
                    </TouchableOpacity>

                    <View style={styles.where}>
                        <Text style={styles.textLocation}>Commentaire</Text>
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
                                <View style={{ flex: 1 }}>
                                    <View>
                                        <Text style={styles.name}>Pablito Ikbal Mohamed</Text>
                                        <Text style={styles.timestamp}>mar 17 avr 2022 à 19h58</Text>
                                    </View>
                                    <View style={styles.commentContainer}>
                                        <Text style={styles.commentText}>Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    }
                />

                <View style={styles.textInpuContainer}>
                    <TextInput
                        onChangeText={(text) => this.setState({ comment: text })}
                        style={styles.textInput}
                        onSubmitEditing={() => this.time.focus()}
                    />
                </View>

            </View>
        );
    }
}

export default CommentScreen;
