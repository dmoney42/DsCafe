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
        height: 150,
        width: 185,
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
    },

    coffeeSizeContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    coffeeSizeButton: {
        padding: 12,
        paddingLeft: 32,
        paddingRight: 32,
        borderRadius: 9999,
        
    },

    activeSizeButton: {
        backgroundColor: 'rgb(194, 125, 72)',
        
    },

    notActiveSizeButton: {
        backgroundColor: 'rgba(0,0,0,0.07)',
    },

    activeSizeButtonText: {
        color: 'white',
    },

    notActiveSizeButtonText: {
        color: '#111827', // Assuming a common gray-700 color
    },


    productAboutWrap: {
        marginLeft: 16, //the margin left and right seen to the left is for the tailwind style mx-4
        marginRight: 16,
        marginVertical: 8, //space-y-2 in tailwind
        height: 112,

    },

    productAboutTitle: {
        color: '#475569', // Assuming a common gray-600 color
        fontSize: 18, // Assuming 1rem = 18px for tailwind property called text-lg
        fontWeight: 'bold',
    },

    productAboutDescription: {
        color: '#475569', // Assuming a common gray-600 color       
    },


    volumeWrap: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 8,
    },

    volumeContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 4,
    },

    volumeContainerTitle: {
        fontSize: 16, // Assuming 1rem = 16px for text-base
        color: '#111827', // Assuming a common gray-700 color
        fontWeight: 600,
        opacity: 0.6,
        
    },
 

});

export default productStyles;