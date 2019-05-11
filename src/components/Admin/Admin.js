import React, { Component } from 'react';
import '../App/App.css';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class Admin extends Component {


    componentDidMount(){
        this.props.getFeedback()
    }

    render() {
        console.log(`adminReducer state `, this.props.reduxState.adminReducer);
        
        return (
            <section>
                <h1>Admin</h1>
                <Table>
                    <TableHead>
                    <TableRow>
                        <TableCell align="right">Feeling</TableCell>
                        <TableCell align="right">Understanding</TableCell>
                        <TableCell align="right">Support</TableCell>
                        <TableCell align="right">Comment</TableCell>
                        <TableCell align="right">Delete</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {this.props.reduxState.adminReducer.map(row => (
                        <TableRow key={row.id}>
                        <TableCell align="right">{row.feeling}</TableCell>
                        <TableCell align="right">{row.understanding}</TableCell>
                        <TableCell align="right">{row.support}</TableCell>
                        <TableCell align="right">{row.comments}</TableCell>
                        </TableRow>
                    ))} 
                    </TableBody>
                </Table>
            </section>
        );
  }
}
const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Admin);

