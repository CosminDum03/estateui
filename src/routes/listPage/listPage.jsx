import { useSearchParams } from 'react-router-dom';
import Card from '../../components/card/Card';
import Filter from '../../components/filter/Filter';
import Map from '../../components/map/Map';
import { listData } from '../../lib/dummydata';
import './listPage.scss';

function ListPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState(listData);

  useEffect(() => {
    // filter data based on searchParams.
  });

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
