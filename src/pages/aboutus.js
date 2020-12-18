import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";

function aboutus() {
  return (
    <div class = "image">
    <CardDeck>
  <Card>
    <Card.Img variant="top" src="/foto/ribass.jpg" />
    <Card.Body>
      <Card.Title><div align = 'center'>Richard Sebastian</div></Card.Title>
      <Card.Text>
      <div align = 'center'>NIM : 00000033861</div>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <div align = 'center'>
      <a href="https://www.instagram.com/ribass11/" >Instagram</a>
      </div>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="/foto/vioree.jpg" />
    <Card.Body>
      <Card.Title><div align = 'center'>Viore</div></Card.Title>
      <Card.Text>
      <div align = 'center'>NIM : 00000033730</div>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
        <div align = 'center'>
          <a href="https://www.instagram.com/viorego/" >Instagram</a>
        </div>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="/foto/aldoo.jpg" />
    <Card.Body>
      <Card.Title><div align = 'center'>Leonardo Martine</div></Card.Title>
      <Card.Text>
      <div align = 'center'>NIM : 00000033749</div>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <div align = 'center'>
      <a href="https://www.instagram.com/leonardomartine_/" >Instagram</a>
      </div>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="/foto/renall.jpg" />
    <Card.Body>
      <Card.Title><div align = 'center'>Renaldy Ari Gunawan</div></Card.Title>
      <Card.Text>
      <div align = 'center'>NIM : 00000034120</div>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <div align = 'center'>
      <a href="https://www.instagram.com/renall_/" >Instagram</a>
      </div>
    </Card.Footer>
  </Card>
</CardDeck>
</div>
  );
}

export default aboutus;
