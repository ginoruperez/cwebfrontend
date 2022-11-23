import React from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function UpdateContractor() {

    let { id } = useParams();
    const [contractorData, setcontractorData] = useState([])
    const handleDelete = (e) => {
       
         // window.alert('Not allowed! Login required')
       
      }

    useEffect(() => {
        axios.get('http://localhost:8080/contractorweb/contractors/' + id).then(res => {
            setcontractorData(res.data);
            console.log(contractorData);

        })
    }, [])

    return (
        <div>



            
                <h2>Contractor</h2>
                <h3>Name {contractorData.name}</h3>
                <h3>Location {contractorData.location}</h3>
                <h3>Specialties {contractorData.specialties}</h3>
                <h3>Size {contractorData.size}</h3>

                <input
                    id="message"
                    name="message"
                    type="text"                    
                    defaultValue={contractorData.name}
                />




                <Link to={'/'}>Go Back</Link>

        </div>
    )
}

