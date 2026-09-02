import { hotKeysData } from "../../../data/hotkeys.data";
import { KeyInfo } from "../../ui/Keyinfo";

const Footer = () => {
  return (
    <div className="flex items-center gap-5 absolute bottom-5 right-4 text-sm">
      {hotKeysData.map((hotkey) => (
        <KeyInfo key={hotkey.label} keyDetail={hotkey} />
      ))}
    </div>
  );
};

export default Footer;
