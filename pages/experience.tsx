import MyAppBar from "../components/MyAppBar";
import MyTimeline from "../components/MyTimeline";
import Page from "../components/Page";
import SocialsBar from "../components/SocialsBar";

export default function Experience() {
	return (
		<>
			<Page/>
			<MyAppBar tabNumber={1} />
			<MyTimeline />
			<SocialsBar/>
		</>
	);
}
