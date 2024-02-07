import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
let bg1 = require("../backgrounds/bg1.jpg");
let bg2 = require("../backgrounds/bg2.jpg");
let bg3 = require("../backgrounds/bg3.jpg");
let bg4 = require("../backgrounds/bg4.jpg");
let bg5 = require("../backgrounds/bg5.jpg");
let bg6 = require("../backgrounds/bg6.jpg");
const MilwaukeeBackground1 = ({ children }: any) => {
	let bgs = [bg2, bg3, bg4, bg5, bg6];
	const max = bgs.length - 1;
	console.log("BG!", bgs);
	const [bg, setBg] = useState(bgs[Math.floor(Math.random() * max)]);

	return (
		<ImageBackground style={{ height: "100%" }} source={bg} resizeMode="cover">
			{children}
		</ImageBackground>
	);
};

export default MilwaukeeBackground1;

const styles = StyleSheet.create({});
