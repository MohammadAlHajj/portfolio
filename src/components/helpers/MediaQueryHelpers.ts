/* eslint-disable react-hooks/rules-of-hooks */
import { useMediaQuery } from "react-responsive";

export const isLandscape = () => !useMediaQuery({ orientation: "portrait" });
export const isPortrait = () =>	useMediaQuery({ orientation: "portrait" });
export const PortraitMode = (children:any) => isPortrait() ? children: null
export const LandscapeMode = (children:any) => isLandscape() ? children: null


export const isMobile = () => useMediaQuery({ maxWidth: 1224 })
export const isTablet = () => useMediaQuery({maxWidth: 1224 })
export const isDesktop = () => useMediaQuery({ minWidth:1224 })
export const isBigScreen = () => useMediaQuery({ minWidth:1824 })
export const isRetina = () => useMediaQuery({ minResolution: '2dppx' })

export const Desktop = (props: {children:any}): JSX.Element => isDesktop() ? props.children: null
export const Tablet = (props: {children:any}): JSX.Element => isTablet() ? props.children: null
export const Mobile = (props: {children:any}): JSX.Element => isMobile() ? props.children: null
export const BigScreen = (props: {children:any}): JSX.Element => isMobile() ? props.children: null
export const Retina = (props: {children:any}): JSX.Element => isMobile() ? props.children: null
// export const Tablet = (children:any) => <Responsive {...props} minWidth={768} maxWidth={991} />;
// export const Mobile = (children:any) => <Responsive {...props} maxWidth={767} />;