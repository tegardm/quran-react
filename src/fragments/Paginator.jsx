import  { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../redux/slices/quranSlice";

const Paginator = () => {
    const dispatch = useDispatch();
    const [pageLength, setPageLength] = useState([]);
    const currentPage = useSelector((state) => state.quran.quransPage);

    useEffect(() => {
        const count = [];
        for (let x = Math.max(currentPage - 2, 1); x <= Math.min(currentPage + 2, 13); x++) {
            count.push(x);
        }
        setPageLength(count);
    }, [currentPage]);

    return (
        <div className="flex bg-base-300 gap-x-5 items-center justify-center">
            <div
                onClick={() => dispatch(changePage(currentPage - 1))}
                className={`font-bold cursor-pointer text-2xl${currentPage <= 1 ? ' invisible' : ''}`}
            >
                                {<i className="text-3xl text-gray-600 bi bi-arrow-left-square"></i>}
            </div>
            <div className="flex gap-x-5">
                {pageLength.map((page) => (
                    <span
                        key={page}
                        className={`border px-3 py-2 rounded-lg cursor-pointer${page === currentPage ? ' font-bold bg-base-100' : ''}`}
                        onClick={() => dispatch(changePage(page))}
                    >
                        {page}
                    </span>
                ))}
            </div>
            <div
                onClick={() => dispatch(changePage(currentPage + 1))}
                className={`cursor-pointer font-bold text-2xl${currentPage >= 11 ? ' invisible' : ''}`}
            >
                {<i className="text-3xl text-gray-600 bi bi-arrow-right-square"></i>}
            </div>
        </div>
    );
};

export default Paginator;
