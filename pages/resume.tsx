import MyAppBar from "../components/MyAppBar";
import Page from "../components/Page";

export default function Resume() {
	return (
		<>
			<Page />
			<MyAppBar tabNumber={2} />
			<div
				className="container"
				style={{
					display: "flex",
					justifyContent: "center",
					width: "100%",
					height: "100%",
				}}
			>
				<iframe
					src="https://drive.google.com/file/d/1mOTGZ931D4NOg1i0MfRM4jQJT0OVGc9p/preview?embedded=true"
					width="1000"
					height="750"
				/>
			</div>
		</>
	);
}
