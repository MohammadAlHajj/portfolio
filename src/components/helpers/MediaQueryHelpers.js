import { useMediaQuery } from "react-responsive";

export const PortraitMode = ({ children }) => {
	const isPortrait = useMediaQuery({ orientation: "portrait" });
	return isPortrait ? children : null;
};

export const LandscapeMode = ({ children }) => {
	const isPortrait = useMediaQuery({ orientation: "portrait" });
	return !isPortrait ? children : null;
};