import { AppBar, Tabs, Tab } from "@mui/material";
import MyAppBar from "../components/MyAppBar";
import Head from "next/head";
import Page from "../components/Page";
import SocialsBar from "../components/SocialsBar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Home() {
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
				<h1 style={{ margin: "0 auto", paddingTop: "20px" }}>About</h1>
			</div>
			<div style={{ margin: "25%" }}>
				<Card sx={{ maxWidth: 600, backgroundColor: "#3399FF" }} variant="outlined">
					<CardContent>
						<Typography variant="h3" gutterBottom>
							An Outlined MUI Card
						</Typography>
						<Typography variant="h4" component="div">
							Heading
						</Typography>
						<Typography sx={{ mb: 1.5 }} color="text.secondary">
							describes the heading
						</Typography>
						<Typography variant="body1">
							Card content
							<br />
							{'"describes the content"'}
						</Typography>
					</CardContent>
				</Card>
			</div>
			<SocialsBar />
		</>
	);
}
