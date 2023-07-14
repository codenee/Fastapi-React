import React, { useState, useEffect } from "react";
import axios from 'axios'

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

export default function TestMusic() {
    
    const[result, setResult] = useState([{
        artist : '',
        pl_title:'',
        pl_id:'',
        index:''
    }]);

    // 글 리스트의 갯수를 세기 위해 선언, 기본값 0
    const [lastIdx, setLastIdx] = useState(0)

    const message = async()=> {
        try{
            let res = await axios.get('http://127.0.0.1:8001/pltest');
            let _result = await res.data.map((rowData) =>(
                setLastIdx(setLastIdx+1),
                {
                    artist : rowData.artist,
                    pl_title: rowData.pl_title,
                    pl_id : rowData.pl_id,
                    index : rowData.index                    
                })
            )
            setResult(result.concat(_result));
        } catch(e){
            console.log(e);
        }
    };

    useEffect(() =>{
        message();
    }, []);

    
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

        
    const columns = [
   
        { id: 'num', label: 'Num', minWidth: 170 },
        { id: 'artist', label: 'Artist', minWidth: 170 },
        { id: 'title', label: 'Title', minWidth: 100 },
        { id: 'pltitle', label : 'playlist', minWidth: 100},       
        
    ];

    return(
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
                <TableHead>
                <TableRow>
                    {columns.map((column) => (
                        <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                        >
                        {column.label}
                        </TableCell>
                    ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                {result && result
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                        return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.num}>
                            {columns.map((column) => {
                            const value = row[column.id];
                            return (
                                <TableCell key={column.id} align={column.align}>
                                  {column.format && typeof value === 'number'
                                    ? column.format(value)
                                    : value}
                                </TableCell>
                              );

                            })}
                        </TableRow>
                        );
                    })}
                </TableBody>
                </Table>
            </TableContainer>
          
        </Paper>
        
    );
}
