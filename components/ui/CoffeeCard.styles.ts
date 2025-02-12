import { StyleSheet } from 'react-native';


const coffeeCardStyles = StyleSheet.create({



    coffeeCardWrap: {
        borderRadius: 40,
        alignItems: 'center',
        backgroundColor: '#724015',
        height: 350,
        width: 260,
        alignSelf: 'center',
        overflow: 'visible',
    },

    coffeeCardShadow: {
        position: 'absolute',
        top: 0,
        left: 70,
        height: 140, // h-40 (assuming 1rem = 4px)
        width: 140, // w-40 (assuming 1rem = 4px)
        borderRadius: 90, // ✅ Ensures rounded corners  
        shadowColor: 'black',
        shadowRadius: 40,
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 0.7,
        backgroundColor: 'transparent',
        /*
        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.8)', // ✅ New Box Shadow
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 20, // ✅ Rounded corners
        overflow: 'visible',
        */
        marginTop: -30, //-mt-14 (assuming 1rem = 4px)
        marginLeft: -80, 
        //overflow: 'hidden', // ✅ Ensures nothing leaks outside
        zIndex: 1,



    },

    coffeeCardImage: {
        height: '100%', // h-40 (assuming 1rem = 4px)
        width: '100%', // w-40 (assuming 1rem = 4px) 
        marginTop: 5,    
        resizeMode: 'contain',
        /*
        borderRadius: 20,
        overflow: 'hidden',
        position: 'absolute',
        */
    },

    coffeeCardTextWrap: {
        paddingHorizontal: 20, // px-5 (assuming 1rem = 4px)
        marginVertical: 130, // my-5 (assuming 1rem = 4px)    
    },

    coffeeCardText: {
        fontSize: 18.4, // Assuming 1rem = 4px for text-3.1
        color: 'white',
        fontWeight: 'bold', // font-semibold
        zIndex: 10, // z-10
    },
});

export default coffeeCardStyles;