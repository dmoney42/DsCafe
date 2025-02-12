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
        marginTop: 20, 
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
      },


      categoriesWrap: {
        paddingHorizontal: 20, // px-5 (assuming 1rem = 4px)
        marginTop: 24, // mt-6 (assuming 1rem = 4px)
      },

      categoryButtonFlatList: {
        overflow: 'visible', 
      },

      categoryButtons: {
       // backgroundColor: 'rgba(0,0,0,0.07)',
        padding: 16,
        paddingHorizontal: 20, // px-5 (assuming 1rem = 4px)
        borderRadius: 50, // rounded-full (assuming 1rem = 10px for a circle)
        marginRight: 8, // mr-2 (assuming 1rem = 4px)
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.35)', // Using boxShadow     
      },

      categoryButtonText: {
        fontWeight: '600', // semibold
      },

      activeCategoryButton: {

      },

      activeCategoryButtonText: {
        color: '#ffffff',
      },

      notActiveCategoryButtonText: {

        color: '#495057',
      },


      coffeeCarouselWrap: {
        display: 'flex',
        marginTop: 70, // mt-16 (assuming 1rem = 4px)
        paddingVertical: 8, // py-2 (assuming 1rem = 4px)         
        justifyContent: 'center', // ✅ Centers items vertically
        alignItems: 'center', // ✅ Centers items horizontally
        width: '100%', // ✅ Full width ensures items are centered
      },

      coffeeCarouselCardsContainer: {
        display: 'flex',
        overflow: 'visible'
      }

  });

export default styles;