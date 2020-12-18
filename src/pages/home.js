import React from 'react';
import "../App.css";

function home() {
    return(
        <div style = {{marginBottom: '30px'}}><h1>Selamat datang di Website Kami!</h1>
        <div class = "welcome"><p>Website kami diperuntukkan untuk menampilkan Live Data Corona Tracker di seluruh dunia termasuk di Indonesia sendiri.
            Website ini juga kami buat sebagai project untuk memenuhi nilai ujian akhir dari mata kuliah Pengantar Teknologi Internet.</p>
            <p>Kami berharap dengan adanya website ini, dapat membantu untuk melihat Live Update dari penyebaran Virus COVID-19, baik secara global maupun nasional.</p>
            <p>- Kelompok 6 -</p>
            </div>
            <img class = "cov19" src = "/foto/cov19.png"></img>
            </div>
        
    )
}

export default home;