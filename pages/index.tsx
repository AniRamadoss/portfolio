import React, { MouseEventHandler } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import muscleUp from "../muscle_up.gif";
// import dragonSquat from "../dragon_squat.gif";
import MyAppBar from "../components/MyAppBar";
import Head from "next/head";
import Page from "../components/Page";
import SocialsBar from "../components/SocialsBar";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useLastFM } from "use-last-fm";
import MusicComponent from "../components/MusicComponent";

export default function Home(): JSX.Element {
	return (
		<>
			<Page />
			<Head>
				<style>
					{`
            body {
              margin: 0;
              padding: 0;
              background-color: lightblue;
            }
          `}
				</style>
			</Head>
			<MyAppBar tabNumber={0} />

			<div style={{ display: "flex", alignItems: "center" }}>
				<h1 style={{ margin: "0 auto", paddingTop: "20px" }}>
					I'm a...
				</h1>
			</div>
			<div style={{ backgroundColor: "purple" }}>
				<Carousel
					infiniteLoop={true}
					interval={10000}
					autoPlay={true}
					useKeyboardArrows={true}
				>
					<div
						style={{
							display: "flex",
							margin: "10px",
							justifyContent: "center",
						}}
					>
						<Card
							sx={{ maxWidth: 700, backgroundColor: "#3399FF" }}
							variant="outlined"
						>
							<CardContent>
								<Typography variant="h4" gutterBottom>
									Calisthenics Athlete
								</Typography>
								<div
									style={{
										display: "flex",
										alignItems: "center",
									}}
								>
									<div
										style={{
											display: "flex",
											flexDirection: "column",
											marginRight: "10px",
										}}
									>
										{/* <Image
											src={muscleUp}
											alt="muscleUp"
											width={167}
											height={300}
										/> */}
										<figcaption
											style={{
												marginTop: "5px",
												textAlign: "center",
											}}
										>
											Muscle Up
										</figcaption>
									</div>

									<div
										style={{
											display: "flex",
											flexDirection: "column",
										}}
									>
										{/* <Image
											src={dragonSquat}
											alt="dragonSquat"
											width={167}
											height={300}
										/> */}
										<figcaption
											style={{
												marginTop: "5px",
												textAlign: "center",
											}}
										>
											Dragon Squat
										</figcaption>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
					<div
						style={{
							display: "flex",
							margin: "10px",
							justifyContent: "center",
						}}
					>
						<Card
							sx={{ maxWidth: 700, backgroundColor: "#3399FF" }}
							variant="outlined"
						>
							<CardContent>
								<Typography variant="h4" gutterBottom>
									Software Engineer
								</Typography>
								<Typography variant="h7" gutterBottom>
									I graduated with a B.S Computer Science
									Degree from Virginia Tech in May 2023.
									<br />
									Currently I am a Software Engineer at
									Amazon.
								</Typography>
								<div
									style={{
										display: "flex",
										alignItems: "center",
									}}
								>
									<div
										style={{
											display: "flex",
											flexDirection: "column",
											marginRight: "10px",
											padding: "10px",
										}}
									>
										<Image
											src={
												"data:image/png;base64,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"
											}
											alt="Virginia Tech"
											width={50}
											height={50}
										/>
									</div>

									<div
										style={{
											display: "flex",
											flexDirection: "column",
											padding: "10px",
										}}
									>
										<Image
											src={
												"data:image/png;base64,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"
											}
											alt="Amazon"
											width={50}
											height={50}
										/>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>

					<div
						style={{
							display: "flex",
							margin: "10px",
							justifyContent: "center",
						}}
					>
						<Card
							sx={{ maxWidth: 700, backgroundColor: "#3399FF" }}
							variant="outlined"
						>
							<CardContent>
								<Typography variant="h4" gutterBottom>
									Music Listener
								</Typography>
								
								<div
									style={{
										display: "flex",
										alignItems: "center",
									}}
								>
									<MusicComponent/>
									<div
										style={{
											display: "flex",
											flexDirection: "column",
											marginRight: "10px",
											padding: "10px",
										}}
									>
										{/* <MusicComponent/> */}
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</Carousel>
			</div>
			<SocialsBar />
		</>
	);
}
