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

    //this wraps the avatar, map icon, location and notification bell
      topAreaWrap: { 
        flex: 1,
        
      },

      //this wraps just the icons so we can flex them
      topIconsWrap: {
        paddingHorizontal: 16, // px-4 (assuming 1rem = 16px)
        flexDirection: 'row', // flex-row
        justifyContent: 'space-between', // justify-between
        alignItems: 'center', // items-center
      },

      avatar: {
        height: 36,
        width: 36,
       // marginRight: 10, // Add space between avatar and icon
      },


      currentlocationWrap: {
        flexDirection: 'row', // flex-row
        alignItems: 'center', // items-center 
        justifyContent: 'space-around', 
      },

      currentLocation: {
        fontSize: 16, // Assuming base font size is 16px
        fontWeight: '600',// semibold
      },

      // Search bar styles
      searchBarWrap: {
        marginHorizontal: 20, // mx-5 (assuming 1rem = 4px)
        marginTop: 20, // mt-4 (assuming 1rem = 4px)
      },

      searchBarContainer: {
        flexDirection: 'row', // flex-row
        justifyContent: 'center', // justify-center
        alignItems: 'center', // Vertically center elements
        borderRadius: 20, // Assuming 1rem = 10px for rounded-full
        padding: 4, // p-1 (assuming 1rem = 4px)
        backgroundColor: '#c6e6e6', // bg-[#c6e6e6]
      },

      searchTextBox: {
        flex: 1,
        padding: 4, // Assuming 1rem = 16px
        fontWeight: '600',
        color: '#495057', // Common color for gray-700 in Tailwind
      }

  });

export default styles;