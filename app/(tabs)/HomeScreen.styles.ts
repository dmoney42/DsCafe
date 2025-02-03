import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
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

      topIconsWrap: {
         display: 'flex', 
      }


  });

export default styles;