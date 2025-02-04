import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        position: 'relative', 
       
    },
    text: {
        color: 'red',
    },

    backgroundImage: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: 220, // Adjust height as needed
      },

      topAreaWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start', // Align items to the start
        paddingHorizontal: 20,
        
      },

      topIconsWrap: {
        paddingHorizontal: 16, // px-4 (assuming 1rem = 16px)
        flexDirection: 'row', // flex-row
        justifyContent: 'space-between', // justify-between
        alignItems: 'center', // items-center
      },

      avatar: {
        height: 36,
        width: 36,
        marginRight: 10, // Add space between avatar and icon
      },


      currentlocationWrap: {
        flexDirection: 'row', // flex-row
        alignItems: 'center', // items-center 
        justifyContent: 'space-around', 
      },

      currentLocation: {
        fontSize: 16, // Assuming base font size is 16px
        fontWeight: '600',// semibold
      }

  });

export default styles;