import React from "react";
import Pagination from "react-js-pagination";

const Paging = ({ totalCount, page, postPerPage, handlePageChange, pageRangeDisplayed }) => {
  // console.log('totalCount: ', totalCount);
  // console.log('postPerPage: ', postPerPage);
  // console.log('pageRangeDisplayed: ', pageRangeDisplayed);
  // console.log('page: ', page);


  return (
    <Pagination
      activePage={page} // 현재 페이지
      itemsCountPerPage={postPerPage} // 한 페이지에 보여줄 아이템 개수
      totalItemsCount={totalCount} // 총 아이템 개수
      pageRangeDisplayed={pageRangeDisplayed} // 페이지 범위
      prevPageText={"‹"}
      nextPageText={"›"}
      onChange={handlePageChange} // 페이지 변경 핸들러
    />
  );
};

export default Paging;