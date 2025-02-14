import { StyleSheet } from 'react-native';


const navigationStyles = StyleSheet.create({

    navigationWrap: {
        flexDirection: 'row', // flex
        alignItems: 'center', // items-center
        borderRadius: 9999, // rounded-full
        padding: 12, // p-3 (assuming 1rem = 4px)
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, // For Android

    },

    navigationButtonActive: {
        backgroundColor: 'white',
    }



});

export default navigationStyles;