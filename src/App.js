import React,{useEffect,useState} from 'react';
import axios from 'axios';


function App() {

const [veri,setVeri]=useState();
const [tarih,setTarih]=useState();


useEffect(()=>{

  axios.get("https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json")
  .then(cevap=>setVeri(cevap.data[tarih]))

},[veri,tarih])


  return (
    <div className="App">
      <div className="container" >
        <div className='row'>
          <div className='col-md-8 mx-auto mt-4'>
            <h2 className='text-center text-white display-3'  >Türkiye Covid-19 Arama Motoru</h2>
            <input type="text" className='form-control' placeholder='gg/aa/yyyy' onChange={(e)=>setTarih(e.target.value)}/>
            <table class="table table-striped text-white">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Test Sayısı</th>
                  <th scope="col">Hasta Sayısı</th>
                  <th scope="col">Vefat Sayısı</th>
                </tr>
              </thead>
              <tbody>
                <tr className='text-white'>
                  <th scope="row">1</th>
                  <td>{veri===undefined?"veri bekleniyor":veri.totalTests}</td>
                  <td>{veri===undefined?"veri bekleniyor":veri.patients}</td>
                  <td>{veri===undefined?"veri bekleniyor":veri.deaths}</td>
                </tr>
           
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
