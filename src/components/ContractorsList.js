import React from 'react'
import { useNavigate } from 'react-router-dom';
import Contractors from './Contractors';
export default function ContractorsList({ isAdmin }) {

  

  const navigateTo = useNavigate();

  //temporary only
  isAdmin=true;

  /**
  if (isAdmin) {
    navigateTo('/Contractors');
  } else {
    window.alert('Not allowed! Login required')
  }
 */

  return (


    <div>

      <Contractors isAdmin={isAdmin} />    
    
    </div>


  )
/** 
  <div className="row">
  <div className="col-sm">
    <div className="card">


    </div>
  </div>
</div>
*/

}
