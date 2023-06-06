import React from "react";
import useSWR from "swr";
import Image from "next/image";
import styles from "../css/ImageRotator.module.css"; // Import your CSS file for styling

const musicEndpoint =
	"https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=AniRamadoss&api_key=a22b1e303a942c00329740cdba44aa89&format=json&limit=1";

const getData = async () => {
	const response = await fetch(musicEndpoint);
	return await response.json();
};

export default function MusicComponent() {
	const { data: musicResults } = useSWR<any>(musicEndpoint, getData);
	const containerStyle = {
		width: "174px", // Set a width for the container
		height: "174px", // Set a height for the container
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
        animation: "rotate 5s infinite linear", // Apply the rotate animation
	};

	const imageStyle = {
		width: "174px", // Set the same width as the container
		height: "174px", // Set the same height as the container
		borderRadius: "50%", // Apply circular border radius
		overflow: "hidden", // Hide anything outside the circular shape
	};

    console.log(musicResults);

	return (
		<div style={containerStyle} className={styles.rotatingImage}>
			{musicResults && (
				<div>
					{musicResults.recenttracks.track[0].name +
						" - " +
						musicResults.recenttracks.track[0].artist["#text"]}
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
					</div>
				</div>
			)}
		</div>
	);
}
