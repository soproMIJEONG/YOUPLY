import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MainViewer from '../../components/main/MainViewer';
import { changeField, initialize } from '../../modules/main';

const MainViewerContainer = () => {
    const dispatch = useDispatch();
    const { user } = useSelector( ({ user }) => ({
        user: user.user
    }));

    const onChangeField = useCallback(payload => dispatch(changeField(payload)),    
        [dispatch]
    );
    
    return <MainViewer user={user} onChangeField={onChangeField} />
}

export default MainViewerContainer;