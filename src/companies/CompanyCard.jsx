import React from 'react';
import {Link} from 'react-router-dom';
import './CompanyCard.css'

const CompanyCard = ({handle, name,description}) => {

    return (
        <Link className="CompanyCard card" to={`/companies/${handle}`}>
            <div className='card-body'>
                <h6 className='card-title'>
                    {name}
                    <p><small>{description}</small></p>
                </h6>

            </div>

        </Link>
    )
}

export default CompanyCard;