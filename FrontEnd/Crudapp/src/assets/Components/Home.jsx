import React from "react";
import BgImg from '../Components/Content/pexels-ivan-samkov-8952192.jpg'
function Home() {

  return (
    <>


      <div className="relative flex overflow-x-hidden ">
  <div className="py-12 animate-marquee whitespace-nowrap" >
    <span className="text-4xl mx-4">Aman's Crud App </span>
    <span className="text-4xl mx-4">Aman's Crud App </span>
    <span className="text-4xl mx-4">Aman's Crud App </span>
    <span className="text-4xl mx-4">Aman's Crud App </span>
  </div>
  <img src={BgImg} alt="" className="BgImg"/>

  <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
    <span className="text-4xl mx-4">Aman's Crud App </span>
    <span className="text-4xl mx-4">Aman's Crud App </span>
    <span className="text-4xl mx-4">Aman's Crud App </span>
    <span className="text-4xl mx-4">Aman's Crud App </span>
    <span className="text-4xl mx-4">Aman's Crud App </span>
  </div>
</div>
    </>
  );
}

export default Home;
