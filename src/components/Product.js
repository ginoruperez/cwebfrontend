import { useNavigate } from "react-router-dom";
import React from 'react';

export default function Product(props) {
    const { product, onAdd, removeItem } = props;

    const { id } = product
    const navigate = useNavigate();
    const navigateContact = () => {
        navigate("/Contact"); 
    }

    const onCreate = (e) => {
        navigate('/CreateService');
    }
  



    return (
        <div>

            <div className="container">
                <div className="col-sm">
                    <div className="card">

                        <h6 className="card-title">{product.title}</h6>
                        <img className="card-img-top" alt="product" src={product.image} />
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">Average Rate € {product.price}</p>
                        </div>
                        <div className="card-footer">


                            {/*
                            <a type="button" onClick={() => onAdd(product)} href="/Shop" className="btn btn-success float-end"
                                data-bs-toggle="offcanvas" data-bs-target="#shoppingCart" aria-controls="shoppingCart">
                                Get a Quote
                            </a>*/}

                            <a type="button" onClick={() => navigateContact()} href="/Contact" className="btn btn-success float-end"
                                data-bs-toggle="offcanvas" data-bs-target="#shoppingCart" aria-controls="shoppingCart">
                                Get a Quote
                            </a>

                            <button className="btn" onClick={() => removeItem(id)} ><i class="fa fa-trash"></i></button>
                            <button className="btn" onClick={() => onCreate()}><i class="fa fa-plus"></i></button>

                            { /* <button className="btn"><i class="fa fa-plus"></i></button> */}

                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
}




