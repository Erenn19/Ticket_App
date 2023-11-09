import React from "react";
import styled from "styled-components";
import { color, compose, size, space } from 'styled-system';
import { View } from "react-native";

const Box = styled(View)(
    compose(
        color,
        size,
        space
    )
);

export default Box;