import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MainViewer from '../../components/main/MainViewer';
import { changeField, initialize } from '../../modules/main';

const MainViewerContainer = () => {
    const dispatch = useDispatch();
    const { searchType, searchKeyword } = useSelector( ({ main }) => ({
        searchType: main.searchType,
        searchKeyword: main.searchKeyword
    }));

    const onChangeField = useCallback(payload => dispatch(changeField(payload)),    
        [dispatch]
    );

    // 언 마운트시 초기화
    useEffect(() => {
        return () => {  
            dispatch(initialize());
        };
    }, [dispatch]);
    
    return <MainViewer searchType={searchType} searchKeyword={searchKeyword} onChangeField={onChangeField} />
}

export default MainViewerContainer;