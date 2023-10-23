import React from "react";
import styled from "styled-components";
import { flexbox, color, compose, size, layout } from 'styled-system';
import { TouchableOpacity } from "react-native";

const Button = styled(TouchableOpacity)(
    compose(
        flexbox,
        size,
        color,
        size,
        layout
    )
);

Button.defaultProps = {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

}

export default Button;