import { create } from 'zustand';

interface MobileSidebarProps {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}

export const useMobileSidebar = create<MobileSidebarProps>(set => ({
	isOpen: false,
	onOpen: () => {
		set({ isOpen: true });
	},
	onClose: () => {
		set({ isOpen: false });
	}
}));
