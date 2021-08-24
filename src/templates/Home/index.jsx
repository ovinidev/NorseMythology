import { useEffect, useState } from 'react';
import { mapData } from '../../api/map-data';
import { Base } from '../Base';
import { mockBase } from '../Base/mock';
import { PageNotFound } from '../PageNotFound';
import { Loading } from '../Loading';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const rawData = await fetch('http://localhost:1337/pages/?slug=mitologia-nordica');
        const dataJson = await rawData.json();
        
        const pageData = mapData(dataJson);
        
        setTimeout(() => {
          setData(pageData[0]);
        }, 1500);
      } catch (e) {
        setData(undefined);
      }
    };
    
    loadData();
  }, []);

  if (data === undefined) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <Loading />;
  }

  return (
    <Base {...mockBase} />
  );
}

export default Home;
