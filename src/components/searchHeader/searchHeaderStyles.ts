import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

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
        borderColor: colors.purple,
    },
    input:{
        flex: 1,
        paddingHorizontal: 5,
    }
})