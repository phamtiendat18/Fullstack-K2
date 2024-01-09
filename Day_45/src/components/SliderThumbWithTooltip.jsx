import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import {
  Slider,
  SliderMark,
  SliderFilledTrack,
  Tooltip,
  SliderTrack,
  SliderThumb,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

const SliderThumbWithTooltip = () => {
  const value = useSelector((state) => {
    return state.value.value;
  });
  const dispatch = useDispatch();
  const [sliderValue, setSliderValue] = useState(value);
  const [showTooltip, setShowTooltip] = useState(false);
  const handleChange = (v) => {
    setSliderValue(v);
  };
  useLayoutEffect(() => {
    localStorage.setItem("RANGE_NUMBER", sliderValue);
    dispatch({
      type: "value/choose",
      payload: sliderValue,
    });
  }, [sliderValue]);

  return (
    <Slider
      id="slider"
      defaultValue={value}
      min={1}
      max={2048}
      colorScheme="teal"
      onChange={handleChange}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      width="95%"
      margin={5}
    >
      <SliderMark value={100} mt="1" ml="-2.5" fontSize="sm">
        100
      </SliderMark>
      <SliderMark value={512} mt="1" ml="-2.5" fontSize="sm">
        512
      </SliderMark>
      <SliderMark value={1024} mt="1" ml="-2.5" fontSize="sm">
        1024
      </SliderMark>
      <SliderMark value={1536} mt="1" ml="-2.5" fontSize="sm">
        1536
      </SliderMark>
      <SliderMark value={2048} mt="1" ml="-2.5" fontSize="sm">
        2048
      </SliderMark>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <Tooltip
        hasArrow
        bg="teal.500"
        color="white"
        placement="top"
        isOpen={showTooltip}
        label={sliderValue}
      >
        <SliderThumb />
      </Tooltip>
    </Slider>
  );
};

export default SliderThumbWithTooltip;
