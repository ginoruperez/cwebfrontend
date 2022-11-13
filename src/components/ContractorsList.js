import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function ContractorsList({ isAdmin }) {


  const navigateTo = useNavigate();

  if (isAdmin) {
    navigateTo('/Contractors');
  } else {
    window.alert('Not allowed! Login required')
  }


  return (


    <div>

      <div className="row">
        <div className="col-sm">
          <div className="card">

  
          </div>
        </div>
      </div>

    </div>


  )
}
