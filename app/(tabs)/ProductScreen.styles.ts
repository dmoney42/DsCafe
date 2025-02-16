import { StyleSheet } from 'react-native';

const productStyles = StyleSheet.create({

    productDetailWrap: {
        flex: 1,
    },

    productBackgroundImage:{
        height: 200, 
        width: "100%",
        position:'absolute',
        borderBottomLeftRadius: 50, 
        borderBottomRightRadius: 50,
        opacity: 0.9,
    },

    topIconsContainer: {
        marginVertical: 16,
    },

    topIconsContainerChild1: {
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    heartButton: {
        borderRadius: 9999,
        borderWidth: 2,
        borderColor: 'white',
        padding: 8,
        
    },

    productScreenCoffeeImageContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },

    coffeeImage: {
        height: 250,
        width: 285,
    },

    reviewContainer: {
        backgroundColor: 'rgb(194, 125, 72)',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 12, // rounded-3x1 (assuming 1rem = 4px)
        marginHorizontal: 8,
        padding: 4, //tailwind p-1 (assuming 1rem = 4px)
        paddingHorizontal: 8, //tailwind px-2
        width: 50,
        opacity: 0.9,
    },

    reviewContainerText: {
        fontSize: 16, // Assuming 1rem = 16px for text-base
        fontWeight: 'bold',
        color: 'white',
    },

    priceContainer: {
        marginVertical: 16,
        display: 'flex',
        flexDirection: 'row', //
        justifyContent: 'space-between', //justify-between in tailwind
        alignItems: 'center', //items-center in tailwind
    },

    priceContainerItemName: {
        color: '#724015',
        fontSize: 24, 
        fontWeight: 600,       
    },

    priceContainerPrice: {
        color: '#724015',
        fontSize: 18, // Assuming 1rem = 18px for tailwind property called text-lg

    },

    coffeeSizeWrap:{
        marginVertical: 16,
        marginHorizontal: 8,
    },

    coffeeSizeText: {
        color: '#724015',
        fontSize: 18, // Assuming 1rem = 18px for text-lg
        fontWeight: 'bold',
    }

});

export default productStyles;