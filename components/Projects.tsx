import { Typography } from "@mui/material";

export default function Projects() {
	return (
		<>
			<div style={{ display: "flex", alignItems: "center" }}>
				<h1 style={{ margin: "0 auto", paddingTop: "20px" }}>
					Projects
				</h1>
			</div>
			<div style={{ display: "flex", paddingLeft: "20px" }}>
				<Typography variant="h5" component="span">
					StreetVision
				</Typography>
			</div>
			<div style={{ display: "flex", paddingLeft: "20px" }}>
				<Typography component="span">
					• Designed a react native mobile app that integrates
					apartment searching with augmented reality
					<br />
					• Implemented a Python back-end running on AWS Lambda to
					query a SQLite apartments database
					<br />
					• Provided authentication and user data storage
					functionalities through Firebase
					<br />
					Technologies: React Native, JavaScript, Python, SQL, Firebase, AWS
					<br />
					<br />
					Won best capstone award and presented at CoStar
					Group headquarters (Company that sponsored Capstone)
				</Typography>
			</div>
			<br />
			<div style={{ display: "flex", paddingLeft: "20px" }}>
				<Typography variant="h5" component="span">
					SpeakSafe - HackViolet 2023 Winner
				</Typography>
			</div>
			<div style={{ display: "flex", paddingLeft: "20px" }}>
				<Typography component="span">
					• Designed a discord bot that can detect spoken misogyny and
					hate speech in voice channels using Node.js
					<br />
					• Deployed a containerized Flask app on Google Cloud that
					hosts a machine learning model to classify text as hate
					speech and manages a ban list using MongoDB
					<br />
					Technologies: Node.js, Python, Docker, MongoDB, Google Cloud
				</Typography>
			</div>
			<br />
			<div style={{ display: "flex", paddingLeft: "20px" }}>
				<Typography variant="h5" component="span">
					Fork-Join Threadpool
				</Typography>
			</div>
			<div style={{ display: "flex", paddingLeft: "20px" }}>
				<Typography component="span">
					• Implemented scalable fork-join threadpool in C with work
					stealing and efficient locking
					<br />
					• Supports fast and efficient parallelization of algorithms
					such as Mergesort and NQueens
					<br />
					Technologies: C, Multithreading, Systems Programming
				</Typography>
			</div>
			<br />
			<div style={{ display: "flex", paddingLeft: "20px" }}>
				<Typography variant="h5" component="span">
					BetterBT - HackViolet 2022 Winner
				</Typography>
			</div>
			<div style={{ display: "flex", paddingLeft: "20px" }}>
				<Typography component="span">
					• Architected a Python app to schedule automated text
					messages using Twilio API with relevant bus information at a
					requested stop, web scraped using Selenium
					<br />
					Technologies: Python, Twilio, Selenium
				</Typography>
			</div>

            <br />
			<div style={{ display: "flex", paddingLeft: "20px" }}>
				<Typography variant="h5" component="span">
                    This Website!
				</Typography>
			</div>
			<div style={{ display: "flex", paddingLeft: "20px" }}>
				<Typography component="span">
					• Created a portfolio website from scratch, to showcase experience and elaborate about myself
					<br />
					Technologies: React, Next.js, TypeScript, Material-UI
				</Typography>
			</div>

			<br />
			<div style={{ display: "flex", paddingLeft: "20px" }}>
				<Typography variant="h5" component="span">
					Ray Tracer
				</Typography>
			</div>
			<div style={{ display: "flex", paddingLeft: "20px" }}>
				<Typography component="span">
					• Constructed a brute-force path tracer in Rust that can
					ray-trace metal, Lambertian, and dielectric spheres,
					generating realistic outputs using optical physics concepts
					<br />
					Technologies: Rust, Multithreading
				</Typography>
			</div>
			<br />
			<div style={{ display: "flex", paddingLeft: "20px" }}>
				<Typography variant="h5" component="span">
                    College Class Monitor
				</Typography>
			</div>
			<div style={{ display: "flex", paddingLeft: "20px" }}>
				<Typography component="span">
					• Utilized Selenium with Java to monitor classes at Virginia Tech and send email notifications when open
                    <br />
                    • Supported simultaneous execution of tasks via multi-threading
					<br />
					Technologies: Java, Selenium
				</Typography>
			</div>
			
		</>
	);
}
