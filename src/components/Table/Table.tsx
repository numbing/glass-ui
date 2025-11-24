import React from 'react';
import './Table.css';

export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  children: React.ReactNode;
  hover?: boolean;
  striped?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export interface TableHeaderProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode;
}

export interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode;
}

export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  children: React.ReactNode;
}

export interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  children?: React.ReactNode;
  align?: 'left' | 'center' | 'right';
}

export interface TableHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  children?: React.ReactNode;
  align?: 'left' | 'center' | 'right';
  sortable?: boolean;
  sorted?: 'asc' | 'desc' | null;
  onSort?: () => void;
}

const TableRoot = React.forwardRef<HTMLTableElement, TableProps>(
  ({ children, hover = false, striped = false, size = 'md', className = '', ...props }, ref) => {
    const classes = [
      'gl-table',
      `gl-table-${size}`,
      hover && 'gl-table-hover',
      striped && 'gl-table-striped',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className="gl-table-container">
        <table ref={ref} className={classes} {...props}>
          {children}
        </table>
      </div>
    );
  }
);

TableRoot.displayName = 'Table';

const TableHeader = React.forwardRef<HTMLTableSectionElement, TableHeaderProps>(
  ({ children, className = '', ...props }, ref) => {
    return (
      <thead ref={ref} className={`gl-table-header ${className}`} {...props}>
        {children}
      </thead>
    );
  }
);

TableHeader.displayName = 'Table.Header';

const TableBody = React.forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ children, className = '', ...props }, ref) => {
    return (
      <tbody ref={ref} className={`gl-table-body ${className}`} {...props}>
        {children}
      </tbody>
    );
  }
);

TableBody.displayName = 'Table.Body';

const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ children, className = '', ...props }, ref) => {
    return (
      <tr ref={ref} className={`gl-table-row ${className}`} {...props}>
        {children}
      </tr>
    );
  }
);

TableRow.displayName = 'Table.Row';

const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ children, align = 'left', className = '', ...props }, ref) => {
    const classes = [
      'gl-table-cell',
      `gl-table-cell-${align}`,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <td ref={ref} className={classes} {...props}>
        {children}
      </td>
    );
  }
);

TableCell.displayName = 'Table.Cell';

const TableHead = React.forwardRef<HTMLTableCellElement, TableHeadProps>(
  ({ children, align = 'left', sortable = false, sorted = null, onSort, className = '', ...props }, ref) => {
    const classes = [
      'gl-table-head',
      `gl-table-head-${align}`,
      sortable && 'gl-table-head-sortable',
      sorted && `gl-table-head-sorted-${sorted}`,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const handleClick = () => {
      if (sortable && onSort) {
        onSort();
      }
    };

    return (
      <th ref={ref} className={classes} onClick={handleClick} {...props}>
        <div className="gl-table-head-content">
          <span>{children}</span>
          {sortable && (
            <span className="gl-table-sort-icon">
              {sorted === 'asc' ? '↑' : sorted === 'desc' ? '↓' : '↕'}
            </span>
          )}
        </div>
      </th>
    );
  }
);

TableHead.displayName = 'Table.Head';

export const Table = Object.assign(TableRoot, {
  Header: TableHeader,
  Body: TableBody,
  Row: TableRow,
  Cell: TableCell,
  Head: TableHead,
});
