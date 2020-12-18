import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../App.css";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import 'bootstrap/dist/css/bootstrap.min.css';

class indo extends React.Component {

  constructor(props) {
    super(props);

    this.getCountryData = this.getCountryData.bind(this);
}

//initial set state
state = {
    positif: 0,
    dirawat: 0,
    sembuh: 0,
    meninggal: 0,
    province: []
}

componentDidMount() {
    this.getData();
}

async getData() {
    const resApi = await Axios.get("https://apicovid19indonesia-v2.vercel.app/api/indonesia");
    const resProvince = await Axios.get("https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi");
    const province = [];
        for (var i=0; i < resProvince.data.length; i++) {
            province.push(resProvince.data[i].provinsi);
        }

    this.setState({
        positif: resApi.data.positif,
        dirawat: resApi.data.dirawat,
        sembuh: resApi.data.sembuh,
        meninggal: resApi.data.meninggal,
        province
    });
}
async getCountryData(event){
  if (event.target.value === "Indonesia") {
    return this.getData();
  }

try {
const res = await Axios.get(`https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi/`);
for (var i=0; i < res.data.length; i++) {
  if(res.data[i].provinsi === event.target.value){
    this.setState({
      positif: res.data[i].kasus,
      dirawat: res.data[i].dirawat,
      sembuh: res.data[i].sembuh,
      meninggal: res.data[i].meninggal
  })
  };
};
}
catch (err) {
     if(err.response.status === 404){
     this.setState({
        positif: "No data available",
        dirawat: "No data available",
        sembuh: "No data available",
        meninggal: "No data available"
     })
}
}
}

renderCountryOptions() {
  // return this.state.countries.map((name, iso2) => {
      return this.state.province.map((provinsi, i) => {
      return <option key={provinsi}>{provinsi}</option>
  });
}
    
    render() {
        return (
            <div class ="container" >
            <h1>Indonesia Corona Update</h1>
            
            {<select className="countryList" onChange={this.getCountryData} style = {{marginBottom: '30px'}}>
                <option>Worldwide</option>
                {this.renderCountryOptions()}
            </select>}

            <CardDeck>
  <Card bg='warning'>
    <Card.Body>
      <Card.Title><div align = 'center'>Confirmed</div></Card.Title>
      <Card.Text>
      <div align = 'center'>{this.state.positif}</div>
      </Card.Text>
    </Card.Body>
    <Card.Footer>

    </Card.Footer>
  </Card>
  <Card bg='info'>
    <Card.Body>
      <Card.Title><div align = 'center'>Hospitalized</div></Card.Title>
      <Card.Text>
      <div align = 'center'>{this.state.dirawat}</div>
      </Card.Text>
    </Card.Body>
    <Card.Footer>

    </Card.Footer>
  </Card>
  <Card bg='success'>
    <Card.Body>
      <Card.Title><div align = 'center'>Recovered</div></Card.Title>
      <Card.Text>
      <div align = 'center'>{this.state.sembuh}</div>
      </Card.Text>
    </Card.Body>
    <Card.Footer>

    </Card.Footer>
  </Card>
  <Card bg='danger'>
    <Card.Body>
      <Card.Title><div align = 'center'>Deaths</div></Card.Title>
      <Card.Text>
      <div align = 'center'>{this.state.meninggal}</div>
      </Card.Text>
    </Card.Body>
    <Card.Footer>

    </Card.Footer>
  </Card>
</CardDeck>
<img class = "bendera" src = "/foto/bendera.jpg"></img> 
    </div>);
    }

}

export default indo;