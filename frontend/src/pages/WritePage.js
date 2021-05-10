import React from 'react';
import Responsive from '../components/common/Responsive';
import EditorContainer from '../containers/write/EditorContainer';
import WriteActionButtonsContainer from '../containers/write/WriteActionButtonsContainer';
import LoadPlaylistButtonContainer from '../containers/write/LoadPlaylistButtonContainer';
import WritePlListContainer from '../containers/write/WritePlListContainer';

import { Helmet } from 'react-helmet-async';
const WritePage = () => {
    return (
        <Responsive>
            <Helmet>
                <title>글쓰기 - YOUPLY</title>
            </Helmet>
            <EditorContainer />
            <LoadPlaylistButtonContainer />
            <WritePlListContainer />
            <WriteActionButtonsContainer />
        </Responsive>
    );
};

export default WritePage;