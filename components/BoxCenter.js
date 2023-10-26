import styled from "styled-components";
import Box from "./Box";

const BoxCenter = styled(Box);
BoxCenter.defaultProps = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
};

export default BoxCenter;   