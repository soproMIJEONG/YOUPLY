import React from 'react'
import WritePlList from '../../components/write/WritePlList';
import { useSelector, useDispatch } from 'react-redux';
import { changeField } from '../../modules/write';

const WritePlListContainer = () => {
    const dispatch = useDispatch();
    const { playlists } = useSelector(({ write }) => ({   
        playlists: write.playlists
    }));

    const handlePlSelect = (value) => {
        dispatch(
            changeField({
                key: 'selectedPL',
                value: value
            })
        )
    }

    return <WritePlList playlists={playlists} handlePLSelect={handlePlSelect}/>
}
export default WritePlListContainer;