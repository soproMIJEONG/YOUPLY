import React, { useEffect, useCallback } from 'react';
import Editor from '../../components/write/Editor';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initialize } from '../../modules/write';

const EditorContainer = () => {
    const dispatch = useDispatch();
    const { title, body } = useSelector(({ write }) => ({ 
        title: write.title,
        body: write.body,
    }));

    const onChangeField = useCallback(payload => dispatch(changeField(payload)),    
        [dispatch]
    );
    // 언마운트 될때 초기화
    useEffect(() => {
        return () => {  // 뒷정리 함수 return
            dispatch(initialize());
        };
    }, [dispatch]);
    
    return <Editor onChangeField={onChangeField} title={title} body={body} />;
};

export default EditorContainer;