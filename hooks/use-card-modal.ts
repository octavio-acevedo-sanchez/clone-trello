import { create } from 'zustand';

interface CardModalProps {
	id?: string;
	isOpen: boolean;
	onOpen: (id: string) => void;
	onClose: () => void;
}

export const useCardModal = create<CardModalProps>(set => ({
	id: undefined,
	isOpen: false,
	onOpen: (id: string) => {
		set({ isOpen: true, id });
	},
	onClose: () => {
		set({ isOpen: false, id: undefined });
	}
}));
