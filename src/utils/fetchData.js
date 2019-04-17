const fetchData = (method,options)=>{
    return fetch("http://localhost:3004/"+method,options);
}
export default fetchData;