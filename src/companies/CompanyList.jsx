import react, {useState, useEffect} from 'react'
import JoblyApi from '../api'
import CompanyCard from './CompanyCard'
import SearchForm from '../search/SearchForm'



const CompanyList = () => {
    const [companies, setCompanies] = useState([])
    
    




    async function ListCompanies(){
        const companies = await JoblyApi.getAllCompanies()
        setCompanies(companies)
       
    }

    async function Search(name){
        const company = await JoblyApi.getCompanies(name)
        setCompanies(company)

    }

    useEffect(() => {
        ListCompanies()
    },[])





 
    return (
        <div className='CompanyList-list'>
            <SearchForm  Search={Search}/>
            
            {companies.map(c => 
                <CompanyCard name={c.name} description={c.description} key={c.name} handle={c.handle}/>
)}
        </div>
    )
}

export default CompanyList