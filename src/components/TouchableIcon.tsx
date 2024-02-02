import React, { useContext } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';
import { colores } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

interface Props {
    iconName: string
}

export const TouchableIcon = ({ iconName }: Props) => {

    const {changeFavIcon} = useContext(AuthContext)

    
    return (
        <TouchableOpacity

            onPress={() => changeFavIcon(iconName)}
            
        >

            <Icon
                name={iconName}
                size={75}
                color={colores.primary} />

        </TouchableOpacity>
    )
}

