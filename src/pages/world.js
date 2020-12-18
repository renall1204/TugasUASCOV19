import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../App.css";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import 'bootstrap/dist/css/bootstrap.min.css';

class world extends React.Component {

    constructor(props) {
        super(props);

        this.getCountryData = this.getCountryData.bind(this);
    }
    
//initial set state
    state = {
        confirmed: 0,
        recovered: 0,
        deaths: 0,
        lastUpdate:[],
        timeUpdate:[],
        countries: []
    }

    componentDidMount() {
        this.getData();
    }

//fetch data
    async getData() {
        const resApi = await Axios.get("https://covid19.mathdro.id/api");
        const resCountries = await Axios.get("https://covid19.mathdro.id/api/countries");
        const countries = [];
            for (var i=0; i < resCountries.data.countries.length; i++) {
                countries.push(resCountries.data.countries[i].name);
            }
        
          let date = new Date(resApi.data.lastUpdate)
          let year = date.getFullYear();
          let month = date.getMonth()+1;
          let dt = date.getDate();
    
          if (dt < 10) {
              dt = '0' + dt;
          }
          if (month < 10) {
              month = '0' + month;
          }
          let fulldate = dt+'-' + month + '-'+year;
          let time = date.getHours()+':' + date.getMinutes()+':' + date.getSeconds();

        this.setState({
            confirmed: resApi.data.confirmed.value,
            recovered: resApi.data.recovered.value,
            deaths: resApi.data.deaths.value,
            lastUpdate: fulldate,
            timeUpdate: time,
            countries
        }); 
    }

    // Error Management
async getCountryData(event){
      if (event.target.value === "Worldwide") {
        return this.getData();
      }
  
    try {
    const res = await Axios.get(`https://covid19.mathdro.id/api/countries/${event.target.value}`);
    let date = new Date(res.data.lastUpdate)
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let dt = date.getDate();

    if (dt < 10) {
        dt = '0' + dt;
    }
    if (month < 10) {
        month = '0' + month;
    }
    let fulldate = dt+'-' + month + '-'+year;
    let time = date.getHours()+':' + date.getMinutes()+':' + date.getSeconds();
    this.setState({
        confirmed: res.data.confirmed.value,
        recovered: res.data.recovered.value,
        deaths: res.data.deaths.value,
        lastUpdate: fulldate,
        timeUpdate: time
    })}
    catch (err) {
        if(err.response.status === 404)
        this.setState({
            confirmed: "No data available",
            recovered: "No data available",
            deaths: "No data available"
        })
    }
}

//function to choose country in the list
renderCountryOptions() {
    
    // return this.state.countries.map((name, iso2) => {
        return this.state.countries.map((name, i) => {
        return <option key={name}>{name}</option> 
    });
}

    render() {
        return (
          <div className="container" >
            <h1>Global Corona Update</h1>
            
            <select className="countryList" onChange={this.getCountryData} style = {{marginBottom: '30px'}}>
                <option>Worldwide</option>
                {this.renderCountryOptions()}
            </select>
          <CardDeck>
  <Card bg='warning'>
    <Card.Body>
      <Card.Title><div align = 'center'>Confirmed</div></Card.Title>
      <Card.Text>
      <div align = 'center'>{this.state.confirmed}</div>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <div align = 'center'>
        <p>Last Update: {this.state.lastUpdate}</p>
        <p>Time Update: {this.state.timeUpdate}</p>
      </div>
    </Card.Footer>
  </Card>
  <Card bg='success'>
    <Card.Body>
      <Card.Title><div align = 'center'>Recovered</div></Card.Title>
      <Card.Text>
      <div align = 'center'>{this.state.recovered}</div>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <div align = 'center'>
      <p>Last Update: {this.state.lastUpdate}</p>
        <p>Time Update: {this.state.timeUpdate}</p>
      </div>
    </Card.Footer>
  </Card>
  <Card bg='danger'>
    <Card.Body>
      <Card.Title><div align = 'center'>Deaths</div></Card.Title>
      <Card.Text>
      <div align = 'center'>{this.state.deaths}</div>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <div align = 'center'>
      <p>Last Update: {this.state.lastUpdate}</p>
      <p>Time Update: {this.state.timeUpdate}</p>
      </div>
    </Card.Footer>
  </Card>
</CardDeck>
<img class = "globe" src = "/foto/globe.png"></img>   
        </div>);
    }
}

export default world;