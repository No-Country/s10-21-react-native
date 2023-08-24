import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container:{
        paddingBottom: 30,
        marginTop:30,
    },
    subTittle:{
        fontSize: 30,
        fontWeight: '500',
    },
    intruction:{
        fontSize: 20,
        color: '#1C1C1C'
    },
    inputContainer:{
        display:'flex',
        flexDirection: 'row',
        borderColor: '#363636',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginTop: 30,        
        backgroundColor: '#F4F4F4'
        
    },
    isfocused:{
        borderColor: '#23FCB6',
    },
    input:{
        flex: 1,
        // overflow: 'hidden',
        paddingHorizontal: 5,
    }
})