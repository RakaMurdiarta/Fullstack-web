function Handlechange(event) {
    console.log(event.target.value)
}

const Handle = () => {
    return (
        <div><label htmlFor="search">Search</label>
            <input type="text" id='search' onChange={Handlechange} /></div>
    )
}

export default Handle;