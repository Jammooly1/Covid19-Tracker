import React, { useEffect, useState } from 'react';
import { Cards, Chart, CountryPicker, Tips } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import coronaImage from './images/image.png';


function App() {

    // const [data, setData] = useState({
    // })

    const [data, setData] = useState({})
    const [country, setCountry] = useState('')

    useEffect(() => {   // fetching from api and setting up the data to send to the jsx files
        async function doTheFetch() {
            const fetchedData = await fetchData();
            
            setData(fetchedData);
        }
        doTheFetch();
      }, []);

    const handleCountryChange = async(country) => {
        const fetchedData = await fetchData(country);

        setData(fetchedData);
        setCountry(country);
    }

    return (
        <div className={styles.container}>  
            <img className={styles.image} src={coronaImage} alt="COVID-19"/>
            <Cards data={data}/>
            <Tips/>
            <CountryPicker handleCountryChange={handleCountryChange}/>
            <Chart data={data} country={country}/>
            <h4>Created by Jamal Dabas</h4>
        </div>
    );
}

export default App;