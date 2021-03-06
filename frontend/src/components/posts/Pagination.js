import React from 'react';
import styled from 'styled-components';
import qs from 'qs';
import Button from '../common/Button';

const PaginationBlock = styled.div`
    width: 320px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-bottom: 3rem;
`;
const PageNumber = styled.div``;

const buildLink = ({ searchType, searchKeyword, page }) => {
    const query = qs.stringify({ searchType, searchKeyword, page });
    return `/posts?${query}`;
};

const Pagination = ({ searchType, searchKeyword, page, lastPage }) => { // 현재선택된계정명, 태그, 현재페이지, 마지막페이지
    return (
        <PaginationBlock>
            <Button
                disabled={page===1}
                to={page ===1 ? undefined : buildLink({ searchType, searchKeyword, page: page - 1})}
            >
                이전    
            </Button>
            <PageNumber>{page}</PageNumber>
            <Button
                disabled={page===lastPage}
                to={page===lastPage ? undefined : buildLink({ searchType, searchKeyword, page: page + 1})}
            >
                다음
            </Button>
        </PaginationBlock>
    );
};

export default Pagination;