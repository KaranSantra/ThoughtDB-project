import React, { useState, useEffect } from 'react';
import axios from 'axios';



const InstagramCarousel = () => {
  const [mediaData, setMediaData] = useState([]);

  useEffect(() => {
    // If your JSON data is hosted, replace 'data.json' with the URL
    axios.get('http://127.0.0.1:5000/api/get_media')
      .then(response => {
        setMediaData(response.data);
        console.log(response.data.length)
        response.data.map((item, index) =>{
            console.log(item)
          })    
      })
      .catch(error => console.error('Error loading the media data:', error));
  }, []);

    const script = document.createElement('script');
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;

    document.body.appendChild(script);




  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div>
        
      <h2>Instagram Media</h2>
      {/* {{ mediaData[0].embedCode }} */}
    //   

        
        {mediaData.map((item, index) => (
          <div key={index} width="1000px">
            <h3>{item.title}</h3>
            <div dangerouslySetInnerHTML={{ __html:item.embedCode }} />
            <p>Added on: {item.addedOn}</p>
          </div>
        ))}
      
    </div>
  );
};

export default InstagramCarousel;
