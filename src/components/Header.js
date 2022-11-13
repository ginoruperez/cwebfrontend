import React from 'react';

export default function Header(props) {
    return (
        <div>                        

            <div className="container">
                <div>
                    <h1 className="fw-bolder text-center" > Contractor
                        <small className="fw-normal fst-italic"> List of Services </small>
                        {' '}
                        {props.countCartItems ? (
                            <button type="button" className="btn btn-primary" >{props.countCartItems}</button>
                        ) : (
                            ''
                        )}
                    </h1> {' '}
                </div>
            </div>
        </div>
    );
}
