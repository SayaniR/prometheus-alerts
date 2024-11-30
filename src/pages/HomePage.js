import React, { useEffect, useState } from 'react';
import { fetchAlertRules } from '../utils/api';
import Header from '../components/Header';
import Search from '../components/Search';
import AlertContainer from '../components/AlertContainer';

const HomePage = () => {
    const [alerts, setAlerts] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadAlerts = async () => {
            try {
                const data = await fetchAlertRules();
                setAlerts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadAlerts();
    }, []);
    
  return (
   <>
   <Header/>
   <div className="mt-10 mb-6 max-w-[2000px] px-10 mx-20 font-inter text-[#475569] text-xl">Browse Library</div>
   <Search/>
   {!loading && <AlertContainer alerts={alerts}/>}
   
   </>
  );
}

export default HomePage;
