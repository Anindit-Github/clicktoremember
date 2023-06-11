import { Players } from "../util.types";

export type MenuModalProps = {
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    playerCount:Players[number]
};