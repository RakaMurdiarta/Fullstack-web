const list = [{
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Mr.x',
    num_comments: 3,
    points: 4,
    objectID: 0
},
{
    title: 'Redux',
    url: 'https://reactjs.org/',
    author: 'Mr.Y',
    num_comments: 2,
    points: 5,
    objectID: 2
}];

const Company_desc = [
    { name: "Company 1", category: 'Finance', start: 1981, end: 2004 },
    { name: "Company 2", category: 'Retail', start: 1992, end: 2008 },
    { name: "Company 3", category: 'Auto', start: 1999, end: 2007 },
    { name: "Company 4", category: 'Retail', start: 1989, end: 2010 },
    { name: "Company 5", category: 'Technology', start: 2009, end: 2014 }
]


let retail_c = []
Company_desc.forEach((item) => {
    if (item.category === 'Retail') {
        retail_c += `<div>${item.name}</div>\n`
    } else {
        <div>hai</div>
    }
    // item.category == 'Retail' ? retail_c += `<div>${item.name}</div>\n` : null;
    return retail_c
})
console.log(retail_c);
const hai = list.map((item) => {
    return (
        <div key={item.objectID}>
            <span><a href={item.url}>{item.title}</a></span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
        </div>
    )
})
// console.log(hai);

function List() {
    return (
        <>
            <label htmlFor="search">Search</label>
            <input type="text" id="search" />
            <h1>{retail_c}</h1>

        </>
    )

}

export default List

