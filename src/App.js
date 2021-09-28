import { useState, useEffect } from 'react';
import { Pagination } from 'antd';
import './App.css';
import 'antd/dist/antd.css';

function App() {
  const [data, setData] = useState([])
  const [pageNum, setPageNum] = useState(1)
useEffect(() => {
  fetch(`https://api.unsplash.com/search/collections?page=${pageNum}&per_page=8&query=moon&client_id=Ws3zFVmHKPkLSigRKRrWWQ3CL6VDUFtBD4rzkdn6XAk`)
    .then(response => response.json())
    .then(res => setData(res.results))
    .catch(err => console.log(err))
},[pageNum])

  const handlePageChange = (page) => {
    setPageNum(page)
  }
  return (
    <div className="App">
      <div className="content">
        {data.map(({id, title, preview_photos}) => {
          return (
            <div className="img-container" key={id}>
              <img src={preview_photos[0].urls.small} alt={title} />
            </div>
          )
        })}
      </div>
      <Pagination defaultCurrent={pageNum} total={50} onChange={handlePageChange} style={{textAlign: 'center', paddingBottom: '40px'}} />
    </div>
  );
}

export default App;
