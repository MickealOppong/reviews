import { useState } from "react";
import reviews from '../data';
import Buttons from "./Buttons";
import Img from './Img';
import Info from "./Info";
import RandomBtn from './RandomBtn';
const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const person = reviews[currentIndex];
  // const [person, setPerson] = useState(reviews[currentIndex])

  function next() {
    if (currentIndex >= reviews.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }

    //setPerson(reviews[currentIndex])
  }

  function prev() {
    if (currentIndex <= 0) {
      setCurrentIndex(reviews.length - 1);

    } else {
      setCurrentIndex(currentIndex - 1);
    }

    // setPerson(reviews[currentIndex])
  }

  const randomIndex = () => {
    const randomIndex = Math.floor(Math.random() * reviews.length);
    setCurrentIndex(randomIndex);
    //setPerson(reviews[randomIndex])
  }
  console.log(currentIndex);
  return <main>
    {
      person && <article key={person.id} className="review">
        <Img img={person.img} />
        <Info person={person} />
        <Buttons event1={prev} event2={next} />
        <RandomBtn event={randomIndex} />
      </article>
    }
  </main>
}

export default Review;
