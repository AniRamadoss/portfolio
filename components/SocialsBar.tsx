import { AppBar, Tabs, Tab } from "@mui/material";
import { useState, ChangeEvent } from "react";
import { BottomNavigation, BottomNavigationAction, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useRouter } from "next/router";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function SocialsBar(SocialsBarProps: {}) {
	const router = useRouter();

	const handleNavigation = (route: string) => {
		router.push(route);
	};

	return (
		<BottomNavigation
			sx={{
				paddingTop: "50px",
				backgroundColor: "lightblue",
				zIndex: 1000,
			}}
		>
			<BottomNavigationAction
				label="GitHub"
				icon={<GitHubIcon />}
				component={Link}
				target="_blank"
				onClick={() =>
					handleNavigation("https://github.com/AniRamadoss")
				}
			/>

			<BottomNavigationAction
				label="LinkedIn"
				icon={<LinkedInIcon />}
				component={Link}
				target="_blank"
				rel="noopener noreferrer"
				onClick={() =>
					handleNavigation("https://www.linkedin.com/in/aniramadoss/")
				}
			/>

			<BottomNavigationAction
				label="Instagram"
				icon={<InstagramIcon />}
				component={Link}
				target="_blank"
				rel="noopener noreferrer"
				onClick={() =>
					handleNavigation("https://www.instagram.com/therealaniramadoss/")
				}
			/>
		</BottomNavigation>
	);
}
