import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import palette from '../../lib/styles/palette';

const SearchForm = styled.form`
    display: flex;
    justify-content: center;
    margin-top: 22px;
    width: 70rem;
    .form-select {
        padding: 12px;
        font-size: 1rem;
        color: ${palette.gray[6]};
        border: none;
        border-bottom: 2px solid ${palette.gray[5]};
    }
    .form-input {
        font-size: 1rem;
        border: none;
        border-bottom: 2px solid ${palette.gray[5]};
        outline: none;
        width: 50%;
        &:focus {
            color: $oc-teal-7;
            border-bottom: 1px solid ${palette.gray[7]};
        }
        & + & {
            margin-top: 1rem;
        }
    }
    .form-btn {
        margin: 4px;
        padding: 13px;
    }
`;

const SearchBar = () => {
    const [input, setInput] = useState('');
    const [select, setSelect] = useState('title');

    const onChangeInput = useCallback(e => {
        setInput(e.target.value);
    }, []);
    
    const onChangeSelect = useCallback(e => {
        setSelect(e.target.value);
    }, []);
    
    return (
        <SearchForm>
            <select className="form-select" value={select} onChange={onChangeSelect} >
                <option selected value="title">제목</option>
                <option value="tag">태그</option>
            </select>
            <input
                className="form-input"
                placeholder="검색어를 입력하세요"
                value={input}
                onChange={onChangeInput}
            />
            <Button className="form-btn" red to={`/posts/${select}?searchKeyword=${input}&page=1`}>검색</Button>
        </SearchForm>
    )
}

export default SearchBar;