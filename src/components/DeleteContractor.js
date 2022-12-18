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
        axios.get('http://localhost:8080/contractorweb/contractors/' + id).then(res => {
            setcontractorData(res.data);
            console.log(contractorData);

        })
    }, [])


    const handleDelete = (e) => {
        axios.delete("http://localhost:8080/contractorweb/contractors/" + id)
            .then(res => {
                alert("Contractor deleted successfully! Please refresh the page.")

            })
        navigateTo('/ContractorAdmin')

    }

    return (

        <div>

            {/** 
            <h2>Contractor</h2>
            <h3>Name {contractorData.name}</h3>
            <h3>Location {contractorData.location}</h3>
            <h3>Specialties {contractorData.specialties}</h3>
            <h3>Size {contractorData.size}</h3>
            <button type="button" onClick={() => handleDelete() } >
                Confirm Delete
              </button>
                      */}

            <main role="main">

                <div className="container">

                    <nav className="my-3 ms-3" >
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item"><a href="/ContractorAdmin">Contractors Admin</a></li>
                            <li className="breadcrumb-item">CRUD Facilities</li>
                        </ol>
                    </nav>

                    <h1 className="fw-bolder">Contractors Maintenance
                        <small className="fw-normal fst-italic"> Delete Contractor</small>
                    </h1>

                    <div className="row mt-3">
                        <div className="col-md-6">
                            <div className="mb-2">


                                <input type="text" className="form-control" name="name"
                                    defaultValue={contractorData.name}
                                    readonly="readonly"
                                />

                            </div>

                            <div className="mb-2">


                                <input type="text" className="form-control" name="location"
                                    defaultValue={contractorData.location}
                                    readonly="readonly"
                                />
                            </div>

                            <div className="mb-2">


                                <input type="text" className="form-control" name="location"
                                    defaultValue={contractorData.specialties}
                                    readonly="readonly"
                                />

                            </div>




                            <div className="mb-2">
                                <input type="text" className="form-control" name="size"
                                    defaultValue={contractorData.size}
                                    readonly="readonly"
                                />
                            </div>
                            <div className="mb-2">
                                <input type="text" className="form-control" name="rate"
                                    defaultValue={contractorData.rate}
                                    readonly="readonly"
                                />
                            </div>
                            <div className="mb-2">
                                <input type="text" className="form-control" name="owner"
                                    defaultValue={contractorData.owner}
                                    readonly="readonly"
                                />
                            </div>
                            <div className="mb-2">

                                <button type="button" onClick={() => handleDelete()} >
                                    Confirm Delete
                                </button>


                            </div>
                        </div>

                    </div>


                </div>

            </main>



        </div>




    )
}