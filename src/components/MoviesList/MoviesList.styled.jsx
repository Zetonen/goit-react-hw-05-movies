import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
    
`;

export const Item = styled.li`
    &:not(:last-child){
        margin-bottom: 20px;
    }
`;
export const LinkDetails = styled(Link)`
    font-size: 18px;
    font-weight: 500;

    &:hover{
        text-decoration: underline;
    }
`;