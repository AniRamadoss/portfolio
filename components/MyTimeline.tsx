import {
	Timeline,
	TimelineItem,
	TimelineOppositeContent,
	TimelineSeparator,
	TimelineConnector,
	TimelineDot,
	TimelineContent,
} from "@mui/lab";
import { Typography, Icon } from "@mui/material";
import Projects from "../components/Projects"

export default function MyTimeline() {
	return (
		<>
			<div style={{ display: "flex", alignItems: "center" }}>
				<h1 style={{ margin: "0 auto", paddingTop: "20px" }}>
					Work Experience
				</h1>
			</div>
			<div style={{ display: "flex", justifyContent: "flex-start" }}>
				<Timeline>
					<TimelineItem>
						<TimelineOppositeContent
							sx={{ m: "auto 0" }}
							align="right"
							variant="body2"
							color="text.secondary"
							style={{
								maxWidth: "200px",
								paddingLeft: "20px",
								paddingRight: "0px",
							}}
						>
							Amazon Web Services <span>&nbsp;&nbsp;</span>
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineConnector />
							<TimelineDot>
								<Icon>
									<img
										src={
											"https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/512px-Amazon_Web_Services_Logo.svg.png"
										}
										height={25}
										width={25}
									/>
								</Icon>
							</TimelineDot>
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent sx={{ py: "12px", px: 2 }}>
							<Typography variant="h6" component="span">
								May 2022 - August 2022
								<br />
								Software Development Engineer Intern
							</Typography>
							<Typography>
								• Overhauled a chatbot to support a broader
								scope of customer requests by integrating it
								with a natural language processing application
								using Kotlin, impacting upwards of 20,000
								customers. <br />• Pioneered auto-rollback and
								approval workflows for CI/CD pipelines and AWS
								Service Alarms using TypeScript, promoting
								productivity and mitigating ops work for 30
								Amazon engineers
							</Typography>
						</TimelineContent>
					</TimelineItem>

					<TimelineItem>
						<TimelineOppositeContent
							sx={{ m: "auto 0" }}
							align="right"
							variant="body2"
							color="text.secondary"
							style={{
								maxWidth: "200px",
								paddingLeft: "20px",
								paddingRight: "0px",
							}}
						>
							Virginia Tech <span>&nbsp;&nbsp;</span>
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineConnector />
							<TimelineDot>
								<Icon>
									<img
										src={
											"https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Virginia_Tech_Hokies_logo.svg/1280px-Virginia_Tech_Hokies_logo.svg.png"
										}
										height={25}
										width={25}
									/>
								</Icon>
							</TimelineDot>
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent sx={{ py: "12px", px: 2 }}>
							<Typography variant="h6" component="span">
								June 2021 - May 2023
								<br />
								Back End Developer
							</Typography>
							<Typography>
								• Helped establish the first scientific effort
								to catalog the lineage of computer systems by
								implementing new REST endpoints using Python
								(Flask and SQLAlchemy) and MongoDB <br />•
								Developed a robust Python library to interact
								with a database, with CRUD, filtering, and
								pagination <br />• Constructed visualizations to
								find trends in computer stats over time using
								matplotlib and pandas
							</Typography>
						</TimelineContent>
					</TimelineItem>
				</Timeline>
			</div>
			<Projects/>
		</>
	);
}
