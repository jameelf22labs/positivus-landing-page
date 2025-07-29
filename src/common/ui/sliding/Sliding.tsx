import { type JSX } from "react";
import { Carousel, type CarouselProps } from "antd";
import Style from "./Sliding.module.css";

interface SlidingProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => JSX.Element;
  carouselProps?: CarouselProps;
}

const Sliding = <T,>({
  items,
  renderItem,
  carouselProps,
}: SlidingProps<T>): JSX.Element => {
  return (
    <div className={Style.slidingWrapper}>
      <Carousel {...carouselProps} centerMode={false} >
        {items.map((item, index) => (
          <div className={Style.slidingSlide} key={index}>
            {renderItem(item, index)}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Sliding;
