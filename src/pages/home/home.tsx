import React from 'react';
import {useNavigate} from 'react-router-dom';

const App:React.FC = ()=>{
  const navigate = useNavigate();
  const search = ()=>{
    const text = document.querySelector('input.search_input') as HTMLInputElement | null;

    if(text != null && (text.value === null || text.value === '')){
      alert('검색어를 입력해 주세요');
      return false;
    }

    navigate('/search/'+text?.value);
  }

  return (
    <div className="container">
      <div className="main">
        <div className="main_page">
          <input type="text" className="search_input"/>
          <button className="search_button" onClick={search}>검색</button>
        </div>
      </div>
    </div>
  )
}

export default App;