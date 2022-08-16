import { StyleSheet, Platform } from 'react-native';
export default StyleSheet.create({
    AdroidSafeArea: {
        // flex: 1,
        // backgroundColor: 'white',
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
});