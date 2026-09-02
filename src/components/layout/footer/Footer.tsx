import { hotKeysData } from "../../../data/hotkeys.data";
import { KeyInfo } from "../../ui/Keyinfo";

const Footer = () => {
  return (
    <div className="flex flex-row-reverse items-center gap-5 text-sm p-2">
      {hotKeysData.map((hotkey) => (
        <KeyInfo key={hotkey.label} keyDetail={hotkey} />
      ))}
    </div>
  );
};

export default Footer;
