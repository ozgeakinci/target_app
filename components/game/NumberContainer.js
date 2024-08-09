import {View, Text, StyleSheet, Dimensions} from 'react-native'
import Colors from '../../constants/colors'

const NumberContainer = ({children}) => {
  return (
   <View style={styles.container}>
    <Text style={styles.numberText}>{children}</Text>
   </View>
  )
}

export default NumberContainer;

// ekran boyutuna göre ayarlayabileceğimiz method dimension window ile screen farkı = IOs ta yok ancak Androidte Android'de ekran, durum çubuğu da dahil olmak üzere mevcut tüm genişlik ve yüksekliktir.Pencere, durum çubuğu hariçtir.

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        borderWidth:4,
        borderColor: Colors.accent500,
        padding:deviceWidth < 480 ?  20 : 24 ,
        margin:deviceWidth < 480 ?  20 : 24 ,
        borderRadius:8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        color: Colors.accent500,
        fontSize:deviceWidth < 380 ?  20 : 24 ,
        fontFamily: 'open-sans-bold'
        // fontWeight: 'bold'

    }
})