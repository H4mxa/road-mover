import React, {useMemo, useRef} from 'react';
import {Animated, View} from 'react-native';
import {styles} from './styles';

const CarouselIndicators = ({
  slidesCount,
  dotSize,
  dotSpacing,
  slideWidth,
  scrollAnimated,
}: any) => {
  const slides = useRef(Array.from(Array(slidesCount).keys())).current;

  const {inputRange, translateOutputRange, widthOutputRange} = useMemo(
    () =>
      slides.reduce<any>(
        (acc, _, index, arr) => {
          const width: any = slideWidth * index;
          const translateX = index * (dotSize + dotSpacing);
          acc.inputRange.push(width);
          acc.translateOutputRange.push(translateX);
          acc.widthOutputRange.push(dotSize);

          if (index < arr.length - 1) {
            acc.inputRange.push(width + slideWidth / 2);
            acc.translateOutputRange.push(translateX);
            acc.widthOutputRange.push(dotSize * 2 + dotSpacing);
          }

          return acc;
        },
        {inputRange: [], translateOutputRange: [], widthOutputRange: []},
      ),
    [dotSize, dotSpacing, slideWidth, slides],
  );

  return (
    <View style={styles.container}>
      {slides.map((_, index) => {
        return (
          <View
            key={index}
            style={[
              styles.dot,
              {
                width: dotSize,
                height: dotSize,
                marginHorizontal: dotSpacing / 2,
              },
            ]}
          />
        );
      })}
      <Animated.View
        style={[
          styles.indicator,
          {
            height: dotSize,
            left: dotSpacing / 2 + 2,
            transform: [
              {
                translateX: scrollAnimated.interpolate({
                  inputRange,
                  outputRange: translateOutputRange,
                }),
              },
            ],
            width: scrollAnimated.interpolate({
              inputRange,
              outputRange: widthOutputRange,
            }),
          },
        ]}
      />
    </View>
  );
};

export default CarouselIndicators;
