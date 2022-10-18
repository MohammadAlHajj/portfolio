import { useMediaQuery } from "react-responsive";
import Responsive from 'react-responsive';

export const PortraitMode = ({ children }) => {
	const isPortrait = useMediaQuery({ orientation: "portrait" });
	return isPortrait ? children : null;
};

export const LandscapeMode = ({ children }) => {
	const isPortrait = useMediaQuery({ orientation: "portrait" });
	return !isPortrait ? children : null;
};

export const Desktop = props => <Responsive {...props} minWidth={992} />;
export const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
export const Mobile = props => <Responsive {...props} maxWidth={767} />;