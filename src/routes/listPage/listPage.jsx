import { useSearchParams } from 'react-router-dom';
import Card from '../../components/card/Card';
import Filter from '../../components/filter/Filter';
import Map from '../../components/map/Map';
import { listData, postData } from '../../lib/dummydata';
import { useState, useEffect } from 'react';
import './listPage.scss';

function ListPage() {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState(listData.slice(4));
  const [page, setPage] = useState(1);

  const loadData = () => {
    setPage((prevState) => prevState + 1);
  };

  useEffect(() => {
    setData(listData);
  }, []);

  const ascendingOrder = () => {
    let ascendingItems = data.sort((a, b) => a.price - b.price);
    setData([...ascendingItems]);
  };
  const descendingOrder = () => {
    let descendingItems = data.sort((a, b) => {
      return b.price - a.price;
    });
    setData([...descendingItems]);
  };

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

    if (searchParams.get('bathroom')) {
      filteredData = filteredData.filter(
        (item) => item.bathroom === Number(searchParams.get('bathroom'))
      );
    }

    if (searchParams.get('property')) {
      filteredData = filteredData.filter(
        (item) => item.property === searchParams.get('property')
      );
    }

    const returnData = filteredData.slice(0, page * 4);
    setData(returnData);
  }, [searchParams, page]);

  return (
    <>
      <div className='listPage'>
        <div className='listContainer'>
          <div className='wrapper'>
            <Filter setPage={setPage} />
            <div>
              <button onClick={ascendingOrder}>Ascending Order</button>
              <button onClick={descendingOrder}>Descending Order</button>
            </div>
            {data.map((item) => (
              <Card key={item.id} item={item} />
            ))}
            <button onClick={loadData}>Load more</button>
          </div>
        </div>
        <div className='mapContainer'>
          <Map items={data} />
        </div>
      </div>
    </>
  );
}

export default ListPage;
