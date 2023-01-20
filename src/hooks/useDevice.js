import { isDesktop, isMobile } from 'react-device-detect';

export const useDevice = () => ({
	isMobile,
	isDesktop,
});
