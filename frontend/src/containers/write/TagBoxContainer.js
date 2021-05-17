import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TagBox from '../../components/write/TagBox';
import { changeField } from '../../modules/write';

const TagBoxContainer = () => {
    const dispatch = useDispatch();
    const { tags } = useSelector(({ write }) => ({
        tags: write.tags
    }));

    const onChangeTags = nextTags => {
        dispatch(
            changeField({
                key: 'tags',
                value: nextTags,
            })
        )
    };

    return <TagBox tags={tags} onChangeTags={onChangeTags} />
}
export default TagBoxContainer;