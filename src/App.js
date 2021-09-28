import React, { Component } from 'react';
import logo from './logo.svg';
import './app.scss';
import './index.scss';
import { Button } from 'carbon-components-react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableHeader,
  TableRow,
  TableToolbar,
  TableToolbarContent,
  TableToolbarSearch,
  TableToolbarMenu,
  TableToolbarAction,
} from 'carbon-components-react';
import {
  DataTable,
  DataTableSkeleton,
  OverflowMenu,
  Pagination,
  TableBatchActions,
  TableSelectAll,
  TableSelectRow,
} from 'carbon-components-react';
class App extends Component {
  render() {
    const headers = [
      {
        key: 'name',
        header: 'Name',
      },
      {
        key: 'modifiedBy',
        header: 'Modified By',
        sortKey: 'modifiedBy.name',
      },
      {
        key: 'lastname',
        header: 'lastname',
      },
    ];

    const rows = [
      {
        id: 'testid1',
        name: 'This is a test',
        modifiedBy: 'The tests',
        lastname: 'Just now',
      },
    ];
    const action = strt => {
      console.log(strt);
    };

    return (
      <div>
        <DataTable rows={rows} headers={headers}>
          {({
            rows,
            headers,
            getHeaderProps,
            getRowProps,
            getTableProps,
            onInputChange,
          }) => (
            <TableContainer title="DataTable" description="With filtering">
              <TableToolbar>
                <TableToolbarContent>
                  {/* pass in `onInputChange` change here to make filtering work */}
                  <TableToolbarSearch onChange={onInputChange} />
                  <TableToolbarMenu>
                    <TableToolbarAction onClick={action('Action 1 Click')}>
                      Action 1
                    </TableToolbarAction>
                    <TableToolbarAction onClick={action('Action 2 Click')}>
                      Action 2
                    </TableToolbarAction>
                    <TableToolbarAction onClick={action('Action 3 Click')}>
                      Action 3
                    </TableToolbarAction>
                  </TableToolbarMenu>
                  <Button onClick={action('Button click')}>
                    Primary Button
                  </Button>
                </TableToolbarContent>
              </TableToolbar>
              <Table {...getTableProps()}>
                <TableHead>
                  <TableRow>
                    {headers.map(header => (
                      <TableHeader
                        key={header.key}
                        {...getHeaderProps({ header })}>
                        {header.header}
                      </TableHeader>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map(row => (
                    <TableRow key={row.id} {...getRowProps({ row })}>
                      {row.cells.map(cell => (
                        <TableCell key={cell.id}>{cell.value}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </DataTable>
      </div>
    );
  }
}

export default App;
