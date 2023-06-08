import React from "react";
import useSWR from "swr";
import Image from "next/image";
import styles from "../css/ImageRotator.module.css"; // Import your CSS file for styling
import { Typography } from "@mui/material";

const musicEndpoint =
	"https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=AniRamadoss&api_key=a22b1e303a942c00329740cdba44aa89&format=json&limit=1";

const getData = async () => {
	const response = await fetch(musicEndpoint);
	return await response.json();
};

export default function MusicComponent() {
	const { data: musicResults } = useSWR<any>(musicEndpoint, getData);
	const containerStyle = {
		width: "500px", // Set a width for the container
		height: "200px", // Set a height for the container
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		animation: "rotate 5s infinite linear", // Apply the rotate animation
	};

	const imageStyle = {
		position: "relative", // Add position relative to the image container
		width: "174px", // Set the same width as the container
		height: "174px", // Set the same height as the container
		borderRadius: "50%", // Apply circular border radius
		overflow: "hidden", // Hide anything outside the circular shape
	};

	const cdCircleStyle = {
		position: "absolute", // Position the CD circle relative to the image container
		top: "50%", // Position it in the vertical center
		left: "50%", // Position it in the horizontal center
		transform: "translate(-50%, -50%)", // Move it back 50% of its own width and height
		width: "50px", // Set the desired size of the CD circle
		height: "50px",
		borderRadius: "50%", // Apply circular shape
		backgroundColor: "lightblue", // Set the desired background color
	};

	console.log(musicResults);

	return (
		<div style={containerStyle} className={styles.rotatingImage}>
			{musicResults && (
				<div style={{ display: "flex", alignItems: "center" }}>
					<div style={{ textAlign: "left", paddingRight: "50px" }}>
						<Typography variant="h6" gutterBottom>
							Currently Listening To
						</Typography>
						<Typography variant="h6" gutterBottom>
							{musicResults.recenttracks.track[0].name}
						</Typography>
						<Typography variant="h7" gutterBottom>
							{musicResults.recenttracks.track[0].artist["#text"]}
						</Typography>
					</div>

					<div style={imageStyle}>
						<Image
							src={
								musicResults.recenttracks.track[0].image[2][
									"#text"
								]
							}
							alt="MusicImage"
							width={174}
							height={174}
							className={styles.rotatingImage}
						/>
						<div
							className={styles.cdCircle}
							style={cdCircleStyle}
						></div>
					</div>
				</div>
			)}
		</div>
	);
}
