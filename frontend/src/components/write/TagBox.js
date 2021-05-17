import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const TagBoxBlock = styled.div`
    width: 100%;
    border-top: 1px solid ${palette.gray[2]};
    padding-top: 2rem;

    h4 {
        color: ${palette.gray[8]};
        margin-top: 0;
        margin-bottom: 0.5rem;
    }
`;

const TagBox = ({ tags, onChangeTags }) => {
    const [localtags, setTags] = useState([]);

    const onClick = (e) => {
        console.log(e);
    };

    return(
        <TagBoxBlock>
            <h4>태그</h4>
            <button onClick={onClick}>태그1</button>
            <button onClick={onClick}>태그2</button>
        </TagBoxBlock>
    )
}
export default TagBox