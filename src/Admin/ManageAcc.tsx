import React, { useEffect, useState } from 'react';
import SiderBar from './SiderBar';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const ManageAcc = () => {
    const [dataUser, setDataUser] = useState([])
    const getDataUser = async () => {
        try {
            let rs = await axios.get('/api/get-all-user')
            setDataUser(rs?.data?.data)
        } catch (error) {

        }
    }
    useEffect(() => {
        getDataUser()
    }, [])
    return (
        <div className='d-flex'>


            <SiderBar />
            <div style={{ marginLeft: '360px' }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>id</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>status</TableCell>
                                <TableCell>Action</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {dataUser.map((row: any) => (
                                <TableRow
                                    key={row?.email}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.id}
                                    </TableCell>

                                    <TableCell component="th" scope="row">
                                        {row.email}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {row?.status == 'INACTIVE' ? 'INACTIVE' : 'ACTIVE'}
                                    </TableCell>

                                    <TableCell component="th" scope="row">
                                        <span onClick={async () => {
                                            await axios.post('/api/update-user', {
                                                id: row?.id,
                                                status: 'ACTIVE'
                                            })
                                            await getDataUser()
                                        }} style={{ cursor: 'pointer', color: '#2196f3' }} >Active User</span>
                                        <span onClick={async () => {
                                            await axios.post('/api/update-user', {
                                                id: row?.id,
                                                status: 'INACTIVE'
                                            })
                                            await getDataUser()
                                        }} style={{ cursor: 'pointer', color: '#f50057', marginLeft: '16px' }}>Inactive User</span>
                                    </TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

        </div>
    );
};

export default ManageAcc;