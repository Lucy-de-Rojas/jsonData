import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'
import styles from '../styles/Home.module.css';



// const link = "http://192.168.1.251:3000/api/hello";

const link2 ="https://jsonplaceholder.typicode.com/todos";
const link3  ="https://gist.githubusercontent.com/planetoftheweb/4069235/raw/0ca9457d10f9ff0be578a699954910d7d6626726/sampledata.json"

const link4 ="https://github.com/Lucy-de-Rojas/jsonData/blob/a5b8e1f557f808a88ddffeccdd7e4b063d7b9942/pages/api/hello";



// the one that really works:
const link5 = "https://raw.githubusercontent.com/Lucy-de-Rojas/jsonData/main/pages/api/plain.json";














export default function Home({data}) {
















  return (
    <div className={styles.container}>
      <Head>
        <title>Lucy de Rojas API json</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main className={styles.main}>
        <h1>data</h1>
        <hr />



      

        {console.log(data)}

        {data.map(item => {
          return <p key={item.name}>{item.name} {' >> '} {item.age}</p>

        })}



    





        
        
        


      </main>


  



    </div>
  )
}





export async function getServerSideProps() {
  const res = await fetch(link5);
  const data = await res.json();
  return {props:{data}}

}























