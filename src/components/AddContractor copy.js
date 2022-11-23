import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { toast} from "react-toastify";


class AddContractor extends React.Component{
 
    handleSubmit(event){
        event.preventDefault();
        const data = {
            name:this.name,            
            location:this.location,            
            specialties:this.specialties,
            size:this.size,
            rate:this.rate,
            owner:this.owner
        }
        console.log(data);

        axios.post("http://localhost:8080/contractorweb/contractors",data)
        .then(res=>{toast("Contractor added successfully")       
        })

        alert("Contractor added successfully!")
    }

    render(){
        return (<div>
                <h2>Create Contractor:</h2>
                <form>
                Company's Name:<input type="text" name="name" onChange={(event)=>{this.name=event.target.value}} align="left"/><br></br>
                Location:<input type="text" name="location" onChange={(event)=>{this.location=event.target.value}} align="left"/>
                <br></br>
                Specialties:<input type="text" name="specialties" onChange={(event)=>{this.specialties=event.target.value}} align="left"/>
                <br></br>
                Size:<input type="text" name="size" onChange={(event)=>{this.size=event.target.value}} align="left"/>
                <br></br>
                Rate:<input type="text" name="rate" onChange={(event)=>{this.rate=event.target.value}} align="left"/>
                <br></br>
                owner:<input type="text" name="owner" onChange={(event)=>{this.owner=event.target.value}} align="left"/>
                <br></br>
                <button onClick={this.handleSubmit.bind(this)}>Save</button>
                <br></br>
                </form>
                <Link  to={'/'}>Go Back</Link>
        </div>)
    }
}

export default AddContractor;






