import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import photo1 from "../images/furniture.png";

const items = [
  {
    src: "https://s3-alpha-sig.figma.com/img/2b79/e11e/d885dbe3ab31e6f0c95ec64b26599246?Expires=1699228800&Signature=obwplXFbEmmklfDfp1sxnW2lkHSi~ptnd2kOoYMQAyfNirqKGja~qZJYJMKusBziy9W9XKU6ZV4XAg0-G4Mvg0qs-evBmpIt92u8NOLzLMvKwDg2H7IssZ1ToA1uvNJB8Cx~XgAD-PfAzfRQfV4j0nL~XhZMjjqKC07EG3oWWlpP4iW3XoSxVIPugKK9YZtx6Fv-fvW2OOaL1vmeGzrdn8TL6GhFiObj30-iL0SZ1qtjpaP2QwfdpjeM180dMyzec9MyAMxOpHJVgFBHIo45rEeYgbeEKVAkh71uZlUSr39XJowAtUqvDU-xWAJD7Ccq5uVSv52jgtjLj7gOaByiug__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    altText: "Sarı",
    caption: "Koltuk",
    key: 1,
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/8823/5526/0767f5620ba9dda5365be14f4ce71741?Expires=1699228800&Signature=MA-jumV4zw2joI1zokS8q6gsLH90V0JxlBD6jl3ZkksYJhFDxxW7kS9Hd7ZzICrojZYSYKAm3KCTU~5lf8JokqJgNLmI9APtbB6WP2i3E7mLdq8urF3ZQhR-X6FdRmoSLQmsBn2jyVofN4~Bmufu1MsW13XIa94aEwTix-HqQ5p8ZVGtAUqH-72rCER40j2BnUwRiI7ZHxHcN0j1Qy3684-eOWFOszalPX2AtMxv4zPmjHDyqr-bfAhs12dQjmYQ71UMjk69BvzTKaumvL2iP~VoHor2a3xa6ra~rN6pup8wao2WCEEjbnTCVqFuEAVlFauct0O4diTrRVB0Q9S07w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    altText: "Gri",
    caption: "Sandalye",
    key: 2,
  },
];

function Example(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img
          style={{
            height: "446px",
            width: "446px",
            marginRight: "0",
            marginLeft: "0",
          }}
          src={item.src}
          alt={item.altText}
        />
        <CarouselCaption
          captionText={item.altText}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Example;
