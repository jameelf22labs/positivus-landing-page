import { type JSX } from "react";
import { Carousel, type CarouselProps } from "antd";

interface SlidingProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => JSX.Element;
  carouselProps?: CarouselProps;
}

const Sliding = <T,>({
  items,
  renderItem,
  carouselProps = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
  },
}: SlidingProps<T>): JSX.Element => {
  return (
    <Carousel {...carouselProps}>
      {items.map((item, index) => (
        <div key={index}>{renderItem(item, index)}</div>
      ))}
    </Carousel>
  );
};

export default Sliding;
