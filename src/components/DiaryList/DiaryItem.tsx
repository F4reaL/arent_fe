import React from "react";

const DiaryItem = () => {
  return (
    <div className="p-4  border-[2px] border-diary-boder text-dark500">
      <div className="font-Inter font-[400]  text-[18px]">
        <div>2021.05.21</div>
        <div>23:25</div>
      </div>
      <div className="mt-2 font-Hiragino font-[300] text-sm line-clamp-[8] ">
        私の日記の記録が一部表示されます。
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…
      </div>
    </div>
  );
};

export default DiaryItem;
