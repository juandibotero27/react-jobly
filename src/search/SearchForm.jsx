import React, {useState} from 'react';


const SearchForm = ({Search}) => {

    const [searchTerm, setSearchTerm] = useState('')

    const handleChange = e => {
        setSearchTerm(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        Search(searchTerm.trim())
        console.log(searchTerm)
        console.log('hello')
        setSearchTerm(searchTerm)
    }




    return (
        <div className='SearchForm mb-4'>
            <form className='form-inline' onSubmit={handleSubmit}>
                <input
                    className='form-control form-control-lg flex-grow-1'
                    name='searchTerm'
                    value={searchTerm}
                    onChange={handleChange}

                 />
                 <button type='submit' className='btn btn-lg btn-primary'>
                    Submit
                 </button>
            </form>
        </div>
    )
}

export default SearchForm;
