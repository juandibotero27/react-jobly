import React from 'react';
import './JobCard.css'

const JobCard = ({title, companyName, salary, equity}) => {



    return (
        <div className='JobCard'>
            <div className='card-body'>
                <h6 className='card-title'>{title}</h6>
                <p>{companyName}</p>
                <div><small>Salary: {salary}</small></div>
                <div><small>Equity: {equity}</small></div>

            </div>
        </div>
    )


} 


export default JobCard;

