import React, { useState, useEffect } from "react";
import image_1 from "./images/image-1.jpg"
import image_2 from "./images/image-2.jpg"
import image_3 from "./images/image-3.jpg"
import image_4 from "./images/image-4.jpg"
import image_5 from "./images/image-5.jpg"
import image_6 from "./images/image-6.jpg"
import image_7 from "./images/image-7.jpg"
import image_8 from "./images/image-8.jpg"
import image_9 from "./images/image-9.jpg"
import image_10 from "./images/image-10.jpg"
import image_11 from "./images/image-11.jpg"
import image_12 from "./images/image-12.jpg"
import image_13 from "./images/image-13.jpg"
import image_14 from "./images/image-14.jpg"
import image_15 from "./images/image-15.jpg"
import image_16 from "./images/image-16.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import "./Quotes.css";

const Quotes = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("")

  // Change background color with animation
  const changeBackgroundImage = () => {
    const backgroundImages = [
      image_1,
      image_2,
      image_3,
      image_4,
      image_5,
      image_6,
      image_7,
      image_8,
      image_9,
      image_10,
      image_11,
      image_12,
      image_13,
      image_14,
      image_15,
      image_16,
    ];

    const randomImage =
      backgroundImages[Math.floor(Math.random() * backgroundImages.length)];

      setBackgroundImage(randomImage)
  };

  // Fetch random quote function
  const fetchQuote = () => {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response error");
        }
        return response.json();
      })
      .then((data) => {
        // Get random quote from the fetched data
        const randomQuote =
          data.quotes[Math.floor(Math.random() * data.quotes.length)];
        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  useEffect(() => {
    fetchQuote();
    changeBackgroundImage();
  }, []);

  const getRandomQuote = () => {
    fetchQuote();
    changeBackgroundImage();
  };

  return (
    <div id="quote-container"
    style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 0.2s ease-in-out",
      }}
      >
      <div id="quote-box">
        <div id="text">{quote}</div>
        <div id="point"></div>
        <div id="author">- {author}</div>
        <button onClick={getRandomQuote} id="new-quote">
          New Quote
        </button><a
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?text=${quote} - ${author}`}
          target="_blank"
          rel="noopener noreferrer"
        ><FontAwesomeIcon class="tweet-quote" icon={faTwitter} >
        </FontAwesomeIcon> </a>
      </div>
    </div>
  );
};

export default Quotes;

