import React from 'react';
import {View, Text, Image} from 'react-native';
import {FontAwesome6} from '@expo/vector-icons';

// Ex1: User-defined component Movie with properties title and year
const Movie = ({title, year, icon_name, icon_color, poster}) => {
    return (
        <View>
            <Text></Text>
            <Text>Movie:</Text>
            <Text>
                <FontAwesome6 name={icon_name} size={40} color={icon_color}/>
                {title} {year}
            </Text>
            <Image source={poster} style={{width:400, height:500}} />
        </View>
    );
};

export default Movie;