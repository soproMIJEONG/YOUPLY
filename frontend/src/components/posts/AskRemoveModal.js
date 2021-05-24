import React from 'react';
import AskModal from '../common/AskModal';

const AskRemoveModal = ({ visible, onConfirm, onCancle }) => {
    return (
        <AskModal 
            visible={visible}
            title="게시글 삭제"
            description="게시글을 정말 삭제하시겠습니까?"
            confirmText="삭제"
            onConfirm={onConfirm}
            onCancle={onCancle}
        />
    );
};

export default AskRemoveModal;