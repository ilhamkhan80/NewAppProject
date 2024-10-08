import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Styles from '../utils/Styles'
import theme from '../utils/Constants'
import CustomButton from '../components/CustomButton'
const Home = () => {
    return (
        <ScrollView >
            <View style={Styles.styles}>
                <View style={Styles.view}>
                    <Text style={styles.viewstyle}>Hi, Maddy</Text>
                </View>
                <View>
                    <Text style={Styles.style1}>
                        This is your first day at Defeat Depression.
                    </Text>
                </View>
                <View style={Styles.view}>
                    <Text style={styles.textstyle}>How are you feeling now?</Text>
                </View>
                <View style={styles.viewcontainer}>
                    <View style={styles.style1}>
                        <View style={styles.style}>
                            <Image source={require('../images/Happy.png')} />
                        </View>
                        <Text style={{ color: theme.black }}>Happy</Text>
                    </View>
                    <View style={styles.style1}>
                        <View style={styles.view}>
                            <Image source={require('../images/sad.png')} />
                        </View>
                        <Text style={{ color: theme.black }}>Sad</Text>
                    </View>
                    <View style={styles.style1}>
                        <View style={styles.viewstyling}>
                            <Image source={require('../images/angry.png')} />
                        </View>
                        <Text style={{ color: theme.black }}>Angry</Text>
                    </View>
                    <View style={styles.style1}>
                        <View style={styles.styling}>
                            <Image source={require('../images/Calm.png')} />
                        </View>
                        <Text style={{ color: theme.black }}>Calm</Text>
                    </View>
                    <View style={styles.style1}>
                        <View style={[styles.style, { backgroundColor: '#69D6EE' }]}>
                            <Image source={require('../images/Relax.png')} />
                        </View>
                        <Text style={{ color: theme.black }}>Anxiety</Text>
                    </View>

                </View>
                <View style={Styles.view}>
                    <Text style={styles.textstyle}>Today Affirmation</Text>
                </View>
                <View style={styles.style2}>
                    <Text style={styles.style3}>now</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../images/sun.png')} />
                        <View>
                            <View >
                                <Text style={[Styles.style1, { fontFamily: theme.BOLD }]}>
                                    Good Morning!                </Text>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={[Styles.style1, { fontSize: 13 }]}>
                                    Today will be gorgeous day. i am safe and sound
                                    All is well. I am greatful                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.container} >
                    <View>
                        <Text style={[Styles.style1, { fontFamily: theme.BOLD }]}>
                            My plan </Text>
                    </View>
                    <View>
                        <Text style={Styles.style1}>View all</Text>
                    </View>
                </View>
                <View>
                    <Text style={Styles.style1}>End Stress/ anxiety . week 1 </Text>
                </View>
                <View style={{ marginTop: 20, alignItems: 'center' }}>
                    <Image source={require('../images/image5.png')} />
                </View>
                <View style={Styles.text}>

                    <View style={styles.row}>

                        <Text>
                            Day 6
                        </Text>
                        <View>
                            <Text>
                                Behaviour
                            </Text>
                        </View>
                    </View>

                    <View>
                        <Text style={[Styles.style1, { fontFamily: theme.BOLD, paddingLeft: 2 }]}>
                            Rest and relaxation </Text>
                    </View>
                    <View style={{ alignSelf: 'flex-end' }}>
                        <Image style={{ height: 60, width: 60 }} source={require('../images/image6.png')} />
                    </View>
                    <View>
                        <CustomButton title='continue' width='50%' />
                    </View>

                </View>
                <View style={styles.stylecontainer} >
                    <View>
                        <Text style={[Styles.style1, { fontFamily: theme.BOLD }]}>
                            Today,s activities </Text>
                    </View>
                    <View>
                        <Text style={[Styles.style1, { marginRight: 10 }]}>View all</Text>
                    </View>

                </View>
                <View>
                    <Text style={Styles.style1}>Total progress </Text>
                    <View style={{ marginTop: 20, alignItems: 'center' }}>
                        <Image source={require('../images/image7.png')} />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    style: {
        backgroundColor: '#A5EB62', borderRadius: 20, height: 60, width: 55, alignItems: 'center', justifyContent: 'center'
    },
    style1: {
        backgroundColor: theme.white, elevation: 5, height: 90, width: 65, borderRadius: 10, justifyContent: 'center', alignItems: 'center'
    },
    style2: {
        borderColor: 'gray', borderWidth: 1, padding: 10, borderRadius: 10
    },
    style3: {
        alignSelf: 'flex-end', paddingRight: 10, color: theme.black, fontFamily: theme.MEDIUM
    },
    style4: {
        justifyContent: 'center', backgroundColor: 'blue', alignItems: 'center',
        padding: 15, borderRadius: 5, marginTop: 16, width: '50%'
    },
    viewstyle: [
        Styles.styles, { color: theme.black, paddingLeft: 10 }],

    textstyle: [
        Styles.styles, { color: theme.black, paddingLeft: 10, fontSize: 17 }],
    viewcontainer: {
        flexDirection: 'row', justifyContent: 'space-evenly', paddingLeft: 5, paddingRight: 5
    },
    view: {
        backgroundColor: '#FEAC7E', borderRadius: 20, height: 60, width: 55, alignItems: 'center', justifyContent: 'center'
    },
    viewstyling: {
        backgroundColor: '#A5EB62', borderRadius: 20, height: 60, width: 55, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FF8E8E'
    },
    styling: {
        backgroundColor: '#A5EB62', borderRadius: 20, height: 60, width: 55, alignItems: 'center', justifyContent: 'center', backgroundColor: '#C496FF'
    },
    container: { 
        justifyContent: 'space-between', flexDirection: 'row', padding: 10 },
    stylecontainer: { 
        justifyContent: 'space-between', flexDirection: 'row' },
    row: {
         flexDirection: 'row', gap: 20 },
})