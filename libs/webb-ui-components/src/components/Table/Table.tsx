import { type Row, type RowData, flexRender } from '@tanstack/react-table';
import React, { useCallback } from 'react';
import { twMerge } from 'tailwind-merge';

import { Pagination } from '../Pagination';
import { TData } from './TData';
import { THeader } from './THeader';
import { TableProps } from './types';

export const Table = <T extends RowData>({
  isDisplayFooter,
  isPaginated,
  tableProps: table,
  totalRecords = 0,
  tableClassName,
  thClassName,
  trClassName,
  tdClassName,
  paginationClassName,
  title,
  onRowClick,
  ref,
  ...props
}: TableProps<T, HTMLDivElement>) => {
  const getRowClickHandler = useCallback(
    (row: Row<T>) => {
      if (typeof onRowClick !== 'function') {
        return;
      }

      return (eve: React.MouseEvent<HTMLTableRowElement>) => {
        eve.preventDefault();
        onRowClick(row);
      };
    },
    [onRowClick]
  );

  return (
    <div {...props} ref={ref}>
      <table
        className={twMerge('w-full border-collapse table-auto', tableClassName)}
      >
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <THeader className={thClassName} key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </THeader>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className={twMerge('group/tr', trClassName)}
              onClick={getRowClickHandler(row)}
            >
              {row.getVisibleCells().map((cell) => (
                <TData className={tdClassName} key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TData>
              ))}
            </tr>
          ))}
        </tbody>
        {isDisplayFooter && (
          <tfoot>
            {table.getFooterGroups().map((footerGroup) => (
              <tr key={footerGroup.id}>
                {footerGroup.headers.map((header) => (
                  <THeader key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.footer,
                          header.getContext()
                        )}
                  </THeader>
                ))}
              </tr>
            ))}
          </tfoot>
        )}
      </table>

      {/** Pagination */}
      {isPaginated && (
        <Pagination
          itemsPerPage={table.getState().pagination.pageSize}
          totalItems={Math.max(
            table.getPrePaginationRowModel().rows.length,
            totalRecords
          )}
          page={table.getState().pagination.pageIndex + 1}
          totalPages={table.getPageCount()}
          canPreviousPage={table.getCanPreviousPage()}
          previousPage={table.previousPage}
          canNextPage={table.getCanNextPage()}
          nextPage={table.nextPage}
          setPageIndex={table.setPageIndex}
          title={title}
          className={paginationClassName}
        />
      )}
    </div>
  );
};
