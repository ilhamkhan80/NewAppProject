import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Styles from '../utils/Styles'
import CustomButton from '../components/CustomButton'

const Describe = () => {
    return (
        <View style={Styles.styles}>
            <View style={Styles.view}>
                <Text style={Styles.styles}>Which of the describe
                    You?</Text>
            </View>
            <Text style={Styles.style1}>Select as many as you’d like</Text>
            <View style={{ gap: 15 }}>
                <View style={styles.style}>
                    <Image source={require('../images/image3.png')} />
                    <Image source={require('../images/image2.png')} />

                </View>
                <View style={styles.style}>
                    <Image source={require('../images/image1.png')} />
                    <Image source={require('../images/image4.png')} />

                </View>
            </View>
          
            <CustomButton title='Next' />
        </View>
    )
}

export default Describe

const styles = StyleSheet.create({
    style: {
        flexDirection: 'row', justifyContent: 'space-between',
        paddingLeft: 10, paddingRight: 10, marginTop: 10
    },
   
})