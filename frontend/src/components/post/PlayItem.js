import React from 'react';
import styled from 'styled-components';

const ItemBlock = styled.div`
    display: flex;
`;

const PlayItem = ({ title, thumbnail }) => {

    return(
        <ItemBlock>
            <img className='ui image' src={thumbnail} />
            {/*<div className='ui title'>{title}</div>*/}
        </ItemBlock>
    )
}

export default PlayItem;