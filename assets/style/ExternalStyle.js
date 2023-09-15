import {StyleSheet} from 'react-native';

const ExternalStyle = StyleSheet.create({
    BottomTabBar: {
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25, 
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        flex: 0.1,
        width: '100%',
        padding: 20,
        backgroundColor: '#fff',
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 10,
        shadowColor: '#000',
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 1,
        },
      },
})
export {ExternalStyle};
