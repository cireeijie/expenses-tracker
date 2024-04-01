import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Circle, Svg } from "react-native-svg";

export default function PieChart({ size, strokeWidth, data }) {
  const [startAngles, setStartAngles] = useState([]);
  const center = size / 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    let angle = 0;
    const angles = [];

    data.forEach((item) => {
      angles.push(angle);
      angle += item.percent * 360;
    });

    setStartAngles(angles);
  }, [data]);

  return (
    <Svg viewBox={`0 0 ${size} ${size}`}>
      {data.map((item, index) => (
        <Circle
          key={index}
          cy={center}
          cx={center}
          r={radius}
          strokeWidth={strokeWidth}
          stroke={item.color}
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - item.percent)}
          originX={center}
          originY={center}
          rotation={startAngles[index]}
          fill={"#F8F8FA"}
        />
      ))}
    </Svg>
  );
}

const styles = StyleSheet.create({});
