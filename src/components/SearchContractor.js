import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


class SearchContractor extends React.Component{
 
    handleSubmit(event){
        event.preventDefault();
        const data = {
            companyName:this.companyName,
            location:this.location,
            specialties:this.specialties
        }
        console.log(data);
        axios.get("http://localhost:8080/contractorweb/contractors",data)
        .then(res=>{          
        })
    }

    render(){
        return (<div>
                <h2>Search Contractor:</h2>
                <form>
                Company's Name:<input type="text" name="companyName" onChange={(event)=>{this.companyName=event.target.value}} align="left"/>
                Location:<input type="text" name="location" onChange={(event)=>{this.location=event.target.value}} align="left"/>
                Specialties:<input type="text" name="specialties" onChange={(event)=>{this.specialties=event.target.value}} align="left"/>
                <button onClick={this.handleSubmit.bind(this)}>Search</button>
                </form>
                <Link  to={'/Contractors'}>Go Back</Link>
        </div>)
    }
}

export default SearchContractor;






