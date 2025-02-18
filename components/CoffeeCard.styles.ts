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
        /*
        shadowColor: 'black',
        shadowRadius: 40,
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 0.7,
        */
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
        width: 200, //keeps the wrap height the same size every card
        paddingHorizontal: 20, // px-5 (assuming 1rem = 4px)
        marginTop: 125, // my-5 (assuming 1rem = 4px)    
        marginLeft: -64,
    },

    coffeeCardText: {
        height: 100, //keeps the view that holds the text the same size every card
        fontSize: 18.4, // Assuming 1rem = 4px for text-3.1
        color: 'white',
        fontWeight: 'bold', // font-semibold
        zIndex: 10, // z-10
    },

    reviewsWrap: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        flexDirection: 'row', // flex-row
        alignItems: 'center', // items-center
        borderRadius: 12, // rounded-3xl (assuming 1rem = 4px)
        padding: 4, // p-1 (assuming 1rem = 4px)
        paddingLeft: 8, // px-2 (assuming 1rem = 4px)
        paddingRight: 8, // px-2 (assuming 1rem = 4px)
        marginHorizontal: 4, // space-x-1 (assuming 1rem = 4px)
        width: 54, // w-13 (assuming 1rem = 4px)
    },


    reviewStars: {
        color: 'white',
        fontWeight: '600',
        fontSize: 16, // Assuming 1rem = 16px for text-base
    },

    volumeWrap: {
        flexDirection: 'row',
        marginHorizontal: 4,
        zIndex: 10,
        marginBottom: 24,
    },

    volumeText1: {
        color: 'white',
        opacity: 0.6, // opacity-60 (assuming 100 = full opacity)
    },

    volumeText2: {
        color: 'white',
    },

    priceWrap: {
        width: 220,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        /*
        shadowColor: '#724015',
        shadowRadius: 25,
        shadowOffset: {width: 0, height: 40},
        shadowOpacity: 0.8,
        elevation: 48,
        */
        
    },

    priceText: {
        color: 'white',
        fontWeight: 'bold',

    },

    plusIconWrap: {
        padding: 4,
        backgroundColor: 'white',
        borderRadius: 9999, // Effectively creates a circle
    },



});

export default coffeeCardStyles;