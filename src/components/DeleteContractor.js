import React from 'react';
import { useParams } from "react-router-dom";

import axios from 'axios';
import { useEffect, useState } from 'react';
import ContractorAdmin from './ContractorAdmin';
import { useNavigate } from 'react-router-dom';

export default function DeleteContractor() {

    let { id } = useParams();
    const [contractorData, setcontractorData] = useState([])
    
    const navigateTo = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:8080/contractorweb/contractors/'+id).then(res => {
            setcontractorData(res.data);
            console.log(contractorData);

        })
    }, [])


    const handleDelete = (e) => {
        axios.delete("http://localhost:8080/contractorweb/contractors/"+id)
            .then(res => {
                alert("Contractor deleted successfully")                              

            })
            navigateTo('/ContractorAdmin')
         
      }

    return (
        <div>
            <h2>Contractor</h2>
            <h3>Name {contractorData.name}</h3>
            <h3>Location {contractorData.location}</h3>
            <h3>Specialties {contractorData.specialties}</h3>
            <h3>Size {contractorData.size}</h3>
            <button type="button" onClick={() => handleDelete() } >
                Confirm Delete
              </button>
             
            
        </div>
    )
}