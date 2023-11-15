import React, { FC } from "react";
import styles from "./pagination.module.css";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import Link from "next/link";
interface PaginationProps {
  totalLength: number;
  pageIndex: number;
  searchedCategory?:string;
}
const Pagination: FC<PaginationProps> = ({ totalLength, pageIndex,searchedCategory }) => {

  const PAGE_LIMIT = 10;
  console.log('totalLength: ', totalLength);
  console.log("Number(pageIndex) * PAGE_LIMIT : ",Number(pageIndex) * PAGE_LIMIT);
  
  return (
    <div className={styles.container}>
      {Number(pageIndex) > 1 ? (
        <Link href={`${searchedCategory?`/categories/paginate/${Number(pageIndex) - 1}?cat=${searchedCategory}`:`/paginate/${Number(pageIndex) - 1}`}`} className={styles.button}>
          <HiOutlineArrowNarrowLeft className={styles.icons} />
          <span  className={styles.btnText}>
            Prev
          </span>
        </Link>
      ):Number(pageIndex)===1 ? (
        <Link href={`${searchedCategory?`/categories?cat=${searchedCategory}`:`/`}`} className={styles.button}>
        <HiOutlineArrowNarrowLeft className={styles.icons} />
        <span className={styles.btnText}>
          Prev
        </span>
      </Link>
      ):(<div/>)}
      {Number(Number(pageIndex) * PAGE_LIMIT)+1 < Number(totalLength) && (
        <Link href={`${searchedCategory ? `/categories/paginate/${Number(pageIndex) + 1}?cat=${searchedCategory}`:`/paginate/${Number(pageIndex) + 1}`}`} className={styles.button}>
          <HiOutlineArrowNarrowRight className={styles.icons} />
          <span  className={styles.btnText}>Next</span>
        </Link>
      )}
    </div>
  );
};

export default Pagination;
