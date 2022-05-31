function SearchBox({search, searchChange}) {
    return (
        <div className="tc pa2">
            <input className="pa3 ba b--green bg-lightest-blue"
            type='search' 
            placeholder="Search Robots..." 
            onChange={searchChange}
            value={search}
            />
        </div>
    )    
}
export default SearchBox;