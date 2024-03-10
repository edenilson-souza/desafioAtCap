import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/basic/table";
import { useState } from "react";

function DataTable({ data, columns }: any) {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const onPageChange = (page: number) => {
        setCurrentPage(page);
    };

    const onPageSizeChange = (size: number) => {
        setPageSize(size);
        setCurrentPage(1);
    };

    const renderRows = () => {
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        return data.slice(startIndex, endIndex).map((row: any, rowIndex: any) => (
            <TableRow key={rowIndex} className='h-8'>
                {Object.keys(columns).map((column: any, columnIndex: any) => (
                    <TableCell key={columnIndex} className='h-8'>
                        {typeof columns[column] === "function" ? columns[column](row) : row[column]}
                    </TableCell>
                ))}
            </TableRow>
        ));
    };

    return (
        <div>
            <Table className=' bg-white rounded-lg'>
                <TableHeader className='h-16'>
                    <TableRow className='h-8 items-center'>
                        {Object.keys(columns).map((column: any, index: any) => (
                            <TableCell key={index} className='text-center'>
                                {typeof columns[column] === "function" ? "Ações" : columns[column]}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody className='h-8'>{renderRows()}</TableBody>
            </Table>
            <div className='flex w-full justify-between'>
                <div className='flex justify-end mb-4 h-8 mt-4'>
                    <select value={pageSize} onChange={e => onPageSizeChange(Number(e.target.value))} className='px-2 py-1 border border-gray-300 rounded-md'>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                    </select>
                </div>
                <Pagination
                    previous={() => onPageChange(currentPage - 1)}
                    next={() => onPageChange(currentPage + 1)}
                    currentPage={currentPage}
                    totalItems={data.length}
                    pageSize={pageSize}
                ></Pagination>
            </div>
        </div>
    );
}

function Pagination({ previous, next, currentPage, totalItems, pageSize }: any) {
    const totalPages = Math.ceil(totalItems / pageSize);

    return (
        <div className='flex flex-row justify-center h-48 py-4'>
            <button
                disabled={currentPage === 1}
                className='h-8 text-sm text-black hover:text-white hover:bg-[#89131d] font-bold border p-2 rounded-xl mx-2 flex flex-row items-center'
                onClick={previous}
            >
                Anterior
            </button>
            <button
                disabled={currentPage === totalPages}
                className='h-8 text-sm text-black hover:text-white hover:bg-[#89131d] font-bold border p-2 rounded-xl mx-2 flex flex-row items-center'
                onClick={next}
            >
                Próximo
            </button>
        </div>
    );
}

export default DataTable;
