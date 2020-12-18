import React from "react";
import "../App.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function Symptom() {
  return (
    <div style={{ margin: "20px" }}>
      <Tabs>
        <TabList>
          <Tab>Garis Besar</Tab>
          <Tab>Gejala</Tab>
          <Tab>Pencegahan</Tab>
          <Tab>Penyembuhan</Tab>
        </TabList>

        <TabPanel>
          <p>
          Coronavirus merupakan keluarga besar virus yang menyebabkan penyakit pada manusia dan hewan. 
          Pada manusia biasanya menyebabkan penyakit infeksi saluran pernapasan, mulai flu biasa 
          hingga penyakit yang serius seperti Middle East Respiratory Syndrome (MERS) dan Sindrom 
          Pernafasan Akut Berat/ Severe Acute Respiratory Syndrome (SARS).  
          </p>
          <p>
          Coronavirus jenis baru yang ditemukan pada manusia sejak kejadian luar biasa muncul di Wuhan Cina, 
          pada Desember 2019, kemudian diberi nama Severe Acute Respiratory Syndrome Coronavirus 2 (SARS-COV2), 
          dan menyebabkan penyakit Coronavirus Disease-2019 (COVID-19).
          </p>
          <hr />
          <p>CARA PENYEBARAN</p>
          <p>
          Penularan virus Corona bisa terjadi melalui droplet saat 
          seseorang batuk, bersin, bernyanyi, berbicara, hingga bernapas.
          </p>
          <p>
          Selain itu WHO juga mengakui adanya bukti bahwa virus Corona itu bisa 
          menyebar melalui partikel-partikel kecil yang melayang di udara dan Sebuah 
          studi juga menunjukkan bahwa partikel virus Corona ditemukan juga pada 
          fecal-oral orang yang terinfeksi, seperti urine dan feses.
          </p>
        </TabPanel>
        <TabPanel>
          <p>Gejala yang banyak ditemui:</p>
          <ul>
            <li>Flu</li>
            <li>Infeksi Mata</li>
            <li>Mudah atau cepat lelah</li>
          </ul>
          <hr />
          <p>Gejala yang jarang ditemui:</p>
          <ul>
            <li>Nyeri otot</li>
            <li>Tidak peka terhadap bau dan rasa</li>
            <li>Diare</li>
            <li>Gatal-gatal</li>
            <li>Pusing</li>
          </ul>
        </TabPanel>
        <TabPanel>
          <p>Berikut adalah berbagai cara untuk mencegah penyebaran COVID-19:</p>
          <ul>
            <li>
            Mencuci tangan dengan benar adalah cara paling sederhana namun efektif untuk mencegah penyebaran virus 2019-nCoV
            </li>
            <li>
            Banyak yang menggunakan masker kain untuk mencegah infeksi virus Corona, padahal masker tersebut belum tentu efektif.
            </li>
            <li>Daya tahan tubuh yang kuat dapat mencegah munculnya berbagai macam penyakit.</li>
            <li>
            Pembatasan fisik atau physical distancing adalah salah satu langkah penting untuk memutus mata rantai penyebaran virus Corona.
            </li>
            <li>Stay home if you feel unwell.</li>
            <li>
            Membersihkan rumah dan melakukan disinfeksi secara rutin
            </li>
            <li>Follow the directions of your local health authority.</li>
          </ul>
        </TabPanel>
        <TabPanel>
          <p>
          Sampai saat ini, belum ada obat untuk mengatasi penyakit COVID-19. 
          Jika Anda di diagnosis COVID-19 tetapi tidak mengalami gejala atau hanya mengalami gejala ringan, 
          Anda bisa melakukan perawatan mandiri di rumah, yaitu:
          </p>
          <hr />
          <ul>
            <li>Lakukan isolasi mandiri selama 2 minggu dengan tidak keluar rumah dan menjaga jarak dengan orang dalam satu rumah.</li>
            <li>Ukur suhu tubuh 2 kali sehari, pagi dan malam hari.</li>
            <li>Cuci tangan dengan sabun, air mengalir, atau hand sanitizer.</li>
            <li>Banyak minum air putih untuk menjaga kadar cairan tubuh.</li>
            <li>Istirahat yang cukup untuk mempercepat proses penyembuhan.</li>
            <li>Konsumsi obat pereda batuk, demam, dan nyeri, setelah berkonsultasi dengan dokter.</li>
            <li>Perhatikan gejala yang Anda alami dan segera hubungi dokter jika gejala memburuk.</li>
          </ul>
          <hr />
          <p>
          Penelitian menunjukkan bahwa pasien COVID-19 dengan gejala ringan dapat sembuh dalam 2 minggu. 
          Namun, sebelum Anda mengakhiri isolasi mandiri dan kembali beraktivitas, tetap lakukan konsultasi dengan dokter.
          </p>
          <p>
          Jika Anda didiagnosis COVID-19 dan mengalami gejala berat, dokter akan merujuk Anda untuk menjalani perawatan dan karantina di rumah sakit rujukan. 
          Metode yang dapat dilakukan dokter antara lain:
          </p>
          <hr />
          <ul>
            <li>Memberikan obat untuk mengurangi keluhan dan gejala</li>
            <li>Memasang ventilator atau alat bantu napas</li>
            <li>Memberikan infus cairan agar tetap terhidrasi</li>
            <li>Memberikan obat pengencer darah dan pencegah penggumpalan darah</li>
          </ul>
          <hr />
          <p>
          Penelitian untuk mencari metode pengobatan yang efektif dalam mengatasi penyakit COVID-19 masih terus dilakukan. Beberapa jenis obat yang diteliti untuk mengatasi COVID-19 adalah remdesivir, lopinavir-ritonavir, dan favipiravir.
          </p>
          <p>
          Di antara obat-obatan tersebut, remdesivir dinilai paling efektif dalam mengatasi COVID-19 pada beberapa pasien. Meski demikian, penelitian tentang efektivitas remdesivir masih terus berlanjut.
          </p>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Symptom;
