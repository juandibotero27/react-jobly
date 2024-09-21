import React, {useEffect, useState} from 'react';
import JoblyApi from '../api';
import { useParams } from 'react-router-dom';


const CompanyDetail = () => {

    const [company, setCompany] = useState([])
    const {handle} = useParams()


    async function CompanyClicked() {
        const company = await JoblyApi.getCompany(handle)
        setCompany(company)
    }

    useEffect(() => {
        CompanyClicked()
    }, [handle])

    

    

    return (
        <div className='CompanyDetail col-md-8 offset-md-2'>
            <h4>{company.name}</h4>
            <p>{company.description}</p>

        </div>
    )

}

export default CompanyDetail;