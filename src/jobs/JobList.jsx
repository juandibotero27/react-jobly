import React, {useState, useEffect} from 'react';
import JoblyApi from '../api';
import JobCard from './JobCard';
import SearchForm from '../search/SearchForm';


const JobsList = () => {

    const [jobs, setJobs] = useState([])


    async function Search(){
        const jobs = await JoblyApi.getAllJobs()
        setJobs(jobs)
    }

    useEffect(() => {
        Search()
    },[])

    return (
        <div className="JobList col-md-8 offset-md-2">
          <SearchForm Search={Search} />
          {jobs.length
            ?jobs.map(j => (
                <JobCard title={j.title}
                         companyName={j.companyName}
                         salary={j.salary}
                         equity={j.equity}
                         key={j.id}
                />
            ))
            : <p className="lead">Sorry, no results were found!</p>
      }
      </div>
    )}

 

 export default JobsList;







    // return (
    //     <div className='JobList col-md-8 offset-md-2'>
    //         {jobs.map(j => (
    //             <JobCard title={j.title}
    //                      companyName={j.companyName}
    //                      salary={j.salary}
    //                      equity={j.equity}
    //                      key={j.id}
    //                      Search={Search}
    //             />
    //         ))}
    //     </div>
    // )