import React from 'react';
import { Carousel } from 'antd';

function Inicio() {
  return (
    <div className="text-center bg-gray-300 py-8">
      <Carousel autoplay className="w-3/4 mx-auto ">
        <div>
          <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/078277ed-5380-4deb-b166-997beba79634/dgb44ph-cce958cb-7efe-4505-b194-9ad14b0ae3a0.png/v1/fill/w_1366,h_585,q_70,strp/marvel_s_spider_man_2_banner_by_crillyboy25_dgb44ph-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODc3IiwicGF0aCI6IlwvZlwvMDc4Mjc3ZWQtNTM4MC00ZGViLWIxNjYtOTk3YmViYTc5NjM0XC9kZ2I0NHBoLWNjZTk1OGNiLTdlZmUtNDUwNS1iMTk0LTlhZDE0YjBhZTNhMC5wbmciLCJ3aWR0aCI6Ijw9MjA0OCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.N0CARv6o1VrlTlMTtC9lF6M41GfKUV9O2bPfs5jEZ5k" alt="Imagen 1" className="w-full h-auto rounded-lg" />
        </div>
        <div>
          <img src="https://gameranx.com/wp-content/uploads/2023/05/Metal-Gear-Solid-Delta-Snake-Eater-1024x341.jpg" alt="Imagen 2" className="w-full h-auto rounded-lg" />
        </div>
        <div>
          <img src="https://cdn.videocardz.com/1/2023/06/XBOX-SERIES-S-HERO-BANNER.jpg?_gl=1*c9giim*_ga*NTA3NTMxMjY4LjE3MTU3NDYxMjA.*_ga_MZLWZ4HZZG*MTcxNTc0NjExOS4xLjEuMTcxNTc0NjExOS42MC4wLjA.&_ga=2.217544278.1152751971.1715746120-507531268.1715746120" alt="Imagen 3" className="w-full h-auto rounded-lg" />
        </div>
      </Carousel>
    </div>
  );
}

export default Inicio;
