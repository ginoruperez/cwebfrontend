import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Contractors(){
 
    const [contractorData,setcontractorData] = useState([])
    const [isLoading,setLoading]=useState(true)


    useEffect(()=>{
      axios.get('http://localhost:8080/contractorweb/contractors').then(res=>{
        setcontractorData(res.data);
        setLoading(false)
      })
    },[])

        return (<div>
            <h2>Contractors:</h2>
            <table align='center'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Specialties</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
{!isLoading?contractorData.map(contractor=><RowCreator item={contractor}/>):""}

                </tbody>
            </table>
            <br/>
            <Link  to={'/addcontractor'}><font size="5">Register contractor</font></Link>
        </div>)
}

function RowCreator(props){
  
        var contractor = props.item;
        return <tr>
            <td>{contractor.id}</td>
            <td>{contractor.name}</td>
            <td>{contractor.location}</td>
            <td>{contractor.specialties}</td>
            <td><Link to={'/contractorDetails/'+contractor.id}>Add Data</Link></td>
            <td><Link to={'/analyze/'+contractor.id}>Analyze</Link></td>
        </tr>
    
}

export default Contractors;