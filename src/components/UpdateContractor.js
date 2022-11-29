import React from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';



async function dataUpdate(credentials) {

    return fetch('http://localhost:8080/contractorweb/contractors', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}


export default function UpdateContractor() {

    let { id } = useParams();
    const [contractorData, setcontractorData] = useState([])


    const [name, setName] = useState();
    const [location, setLocation] = useState();
    const [specialties, setSpecialties] = useState();
    const [size, setSize] = useState();
    const [rate, setRate] = useState();
    const [owner, setOwner] = useState();

    const handleSubmit = async e => {
        //  e.preventDefault();

        

        if (name !== undefined && location === undefined && specialties === undefined && size === undefined &&
            rate === undefined && owner === undefined) {
            console.log('name value after setname ', name)
            alert('NAME NOT UNDEFINED')
            let location = contractorData.location
            let specialties = contractorData.specialties
            let size = contractorData.size
            let rate = contractorData.rate
            let owner = contractorData.owner
            await dataUpdate({
                id,
                name,
                location,
                specialties,
                size,
                rate,
                owner
            });


        } else if (name !== undefined && location !== undefined && specialties === undefined && size === undefined &&
            rate === undefined && owner === undefined) {
            alert('NAME LOCATION NOT UNDEFINED')
            let specialties = contractorData.specialties
            let size = contractorData.size
            let rate = contractorData.rate
            let owner = contractorData.owner
            await dataUpdate({
                id,
                name,
                location,
                specialties,
                size,
                rate,
                owner
            });
        }
        else if (name !== undefined && location !== undefined && specialties !== undefined && size === undefined &&
            rate === undefined && owner === undefined) {
            alert('NAME LOCATION SPECIALTIES NOT UNDEFINED')
            let size = contractorData.size
            let rate = contractorData.rate
            let owner = contractorData.owner
            await dataUpdate({
                id,
                name,
                location,
                specialties,
                size,
                rate,
                owner
            });
        } else if (name !== undefined && location !== undefined &&
            specialties !== undefined && size !== undefined &&
            rate === undefined && owner === undefined) {
            alert('NAME LOCATION SPECIALTIES SIZE NOT UNDEFINED')

            let rate = contractorData.rate
            let owner = contractorData.owner
            await dataUpdate({
                id,
                name,
                location,
                specialties,
                size,
                rate,
                owner
            });
        } else if (name !== undefined && location !== undefined &&
            specialties !== undefined && size !== undefined &&
            rate !== undefined && owner === undefined) {
            alert('NAME LOCATION SPECIALTIES SIZE RATE NOT UNDEFINED')
            let owner = contractorData.owner
            await dataUpdate({
                id,
                name,
                location,
                specialties,
                size,
                rate,
                owner
            });
        } else if (name !== undefined && location !== undefined &&
            specialties !== undefined && size !== undefined &&
            rate !== undefined && owner !== undefined) {
            alert('NAME LOCATION SPECIALTIES SIZE RATE OWNER NOT UNDEFINED')
            await dataUpdate({
                id,
                name,
                location,
                specialties,
                size,
                rate,
                owner
            });

        }
        else if (name === undefined && location !== undefined &&
            specialties === undefined && size === undefined &&
            rate === undefined && owner === undefined) {
            alert('LOCATION UNDEFINED')
            let name = contractorData.name
            //let location = contractorData.location
            let specialties = contractorData.specialties
            let size = contractorData.size
            let rate = contractorData.rate
            let owner = contractorData.owner
            await dataUpdate({
                id,
                name,
                location,
                specialties,
                size,
                rate,
                owner
            });

        }

        else if (name === undefined && location === undefined &&
            specialties !== undefined && size === undefined &&
            rate === undefined && owner === undefined) {
            alert('SPECIALTIES NOT UNDEFINED')
            let name = contractorData.name
            let location = contractorData.location
            //let specialties = contractorData.specialties
            let size = contractorData.size
            let rate = contractorData.rate
            let owner = contractorData.owner
            await dataUpdate({
                id,
                name,
                location,
                specialties,
                size,
                rate,
                owner
            });

        }

        else if (name === undefined && location === undefined &&
            specialties === undefined && size !== undefined &&
            rate === undefined && owner === undefined) {
            alert('SIZE NOT UNDEFINED')
            let name = contractorData.name
            let location = contractorData.location
            let specialties = contractorData.specialties
            //let size = contractorData.size
            let rate = contractorData.rate
            let owner = contractorData.owner
            await dataUpdate({
                id,
                name,
                location,
                specialties,
                size,
                rate,
                owner
            });

        }
        if (name === undefined && location === undefined &&
            specialties === undefined && size === undefined &&
            rate !== undefined && owner === undefined) {
            alert('RATE NOT UNDEFINED')
            let name = contractorData.name
            let location = contractorData.location
            let specialties = contractorData.specialties
            let size = contractorData.size
            //let rate = contractorData.rate
            let owner = contractorData.owner
            await dataUpdate({
                id,
                name,
                location,
                specialties,
                size,
                rate,
                owner
            });

        }
        if (name === undefined && location === undefined &&
            specialties === undefined && size === undefined &&
            rate === undefined && owner !== undefined) {
            alert('OWNER NOT UNDEFINED')
            let name = contractorData.name
            let location = contractorData.location
            let specialties = contractorData.specialties
            let size = contractorData.size
            let rate = contractorData.rate
            //let owner = contractorData.owner
            await dataUpdate({
                id,
                name,
                location,
                specialties,
                size,
                rate,
                owner
            });

        }


        window.alert('Successfully updated')


    }


    useEffect(() => {
        axios.get('http://localhost:8080/contractorweb/contractors/' + id).then(res => {
            setcontractorData(res.data);
            console.log('Contractor data',);


        })
    }, [])

    return (
        <div>

            {/* 
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
                        <small className="fw-normal fst-italic"> Update Contractors</small>
                    </h1>

                    <div className="row mt-3">
                        <div className="col-md-6">
                            <div className="mb-2">

                                <input type="text" className="form-control" name="name"
                                    defaultValue={contractorData.name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Company's Name *" required />

                                <div className="invalid-feedback">
                                    Valid Name is required.
                                </div>
                            </div>

                            <div className="mb-2">


                                <input type="text" className="form-control" name="location"
                                    defaultValue={contractorData.location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    placeholder="Location *" required />
                                <div className="invalid-feedback">
                                    Valid location is required.
                                </div>

                            </div>

{/*  */ }

                            <div className="mb-2">
                                <h5>Select Specialties</h5>
                                <select className="form-control" name="specialties"
                                    defaultValue={contractorData.specialties}
                                    onChange={(e) => setSpecialties(e.target.value)}
                                    id="specialties" >
                                    <option value="****Select specialties***">Select Specialties</option>
                                    <option value="Roofing">Roofing</option>
                                    <option value="Painting">Painting</option>
                                    <option value="Heating">Heating</option>
                                    <option value="Plumbing">Plumbing</option>
                                    <option value="Air-condition">Air-Condition</option>
                                    <option value="Electrical">Electrical</option>
                                    <option value="Drywall">Drywall</option>
                                    <option value="Carpets">Carpets</option>
                                    <option value="Glass">Glass</option>
                                </select>
                            </div>
                            <br></br>

                            <div className="mb-2">
                                <input type="text" className="form-control" name="size"
                                    defaultValue={contractorData.size}
                                    onChange={(e) => setSize(e.target.value)}
                                    placeholder="Size *" aria-label="size" required />
                            </div>
                            <div className="mb-2">
                                <input type="text" className="form-control" name="rate"
                                    defaultValue={contractorData.rate}
                                    onChange={(e) => setRate(e.target.value)}
                                    placeholder="Rate *"
                                    aria-label="rate" required />
                            </div>
                            <div className="mb-2">
                                <input type="text" className="form-control" name="owner"
                                    defaultValue={contractorData.owner}
                                    onChange={(e) => setOwner(e.target.value)}
                                    placeholder="Owner *"
                                    aria-label="owner" required />
                            </div>
                            <div className="mb-2">
                                <button type="button" onClick={() => handleSubmit()} >
                                    Save
                                </button>


                            </div>
                        </div>

                    </div>


                </div>

            </main>

        </div>
    )
}

