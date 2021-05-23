import React, { useCallback } from 'react'
import WritePlList from '../../components/write/WritePlList';
import { useSelector, useDispatch } from 'react-redux';
import { changeField } from '../../modules/write';

const WritePlListContainer = () => {
    const dispatch = useDispatch();
    const { playlists, thumbnail } = useSelector(({ write }) => ({   
        playlists: write.playlists,
        thumbnail: write.thumbnail
    }));

    const onChangeField = useCallback(payload => dispatch(changeField(payload)),   
        [dispatch]
    );

    return <WritePlList playlists={playlists} thumbnail={thumbnail} onChangeField={onChangeField} />
}
export default WritePlListContainer;