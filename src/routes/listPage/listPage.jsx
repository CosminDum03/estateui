import { useSearchParams } from 'react-router-dom';
import Card from '../../components/card/Card';
import Filter from '../../components/filter/Filter';
import Map from '../../components/map/Map';
import { listData, postData } from '../../lib/dummydata';
import { useState, useEffect } from 'react';
import './listPage.scss';

function ListPage() {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState(listData);

  useEffect(() => {
    let filteredData = postData;
    if (searchParams.get('type') && searchParams.get('type') !== 'any') {
      filteredData = filteredData.filter(
        (item) => item.type === searchParams.get('type')
      );
    }

    if (searchParams.get('minPrice')) {
      filteredData = filteredData.filter(
        (item) => item.price >= searchParams.get('minPrice')
      );
    }

    if (searchParams.get('maxPrice')) {
      filteredData = filteredData.filter(
        (item) => item.price <= searchParams.get('maxPrice')
      );
    }

    if (searchParams.get('city')) {
      filteredData = filteredData.filter(
        (item) =>
          item.city.toLowerCase() === searchParams.get('city').toLowerCase()
      );
    }
    if (searchParams.get('bedroom')) {
      filteredData = filteredData.filter(
        (item) => item.bedRooms === Number(searchParams.get('bedroom'))
      );
    }

    if (searchParams.get('property')) {
      filteredData = filteredData.filter(
        (item) => item.property === searchParams.get('property')
      );
    }

    setData(filteredData);
  }, [searchParams]);

  return (
    <div className='listPage'>
      <div className='listContainer'>
        <div className='wrapper'>
          <Filter />
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className='mapContainer'>
        <Map items={data} />
      </div>
    </div>
  );
}

export default ListPage;
