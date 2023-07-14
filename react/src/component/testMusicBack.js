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


export default function TestMusicBack() {

    
    const[result, setResult] = useState(null);
    const message = async()=> {
        try{
            let res = await axios.get('http://127.0.0.1:8001/pltest');
            let result = res.data;
            setResult(result);
        } catch(e){
            console.log(e);
        }
    };

    useEffect(() =>{
        message();
    }, []);

    const handleSave = (result) => {

    }

    return(
        
        <div>
            {
                result && (
                    <textarea
                    rows={14}
                    value={JSON.stringify(result, null, 2)}
                    readOnly={true}
                    />
                    
                )                    
            }
        </div>
        
    );
}
