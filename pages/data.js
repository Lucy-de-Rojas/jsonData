export const link = "https://github.com/Lucy-de-Rojas/jsonData/tree/main/pages/api/hello";






export default function Data({data}) {

    return <>
    <h1>Data page</h1>
    {console.log(data)}


    <h2>Data:</h2>


{data.map(item=> {
    return (
    <>
    
    <p>{item.name} {' >> '}{item.age}</p>
    </>)
})}




    
    
    </>

    
    

}


export async function getServerSideProps() {
    const res = await fetch(link);
    const data = await res.json();
    return {props:{data}}

}



















