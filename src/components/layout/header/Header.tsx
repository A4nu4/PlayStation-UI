import React from "react";
import { Bell, Gamepad2, Handbag, SmilePlus, Trophy, Wifi } from "lucide-react";

const currentTime = new Date().toLocaleTimeString([], {
  hour: "2-digit",
  minute: "2-digit",
});

const Header = () => {
  return (
    <header>
      <div>
        <div>
          <time>{currentTime}</time>
          <Wifi />
        </div>

        <div>
          <span>
            <Handbag fill="white" />3
          </span>

          <span>|</span>

          <span>$39,97</span>
        </div>
      </div>

      <div>
        <div>
          <Gamepad2 />
          <span>1</span>
        </div>
        <div>
          <Gamepad2 />
          <span>2</span>
        </div>
      </div>

      <div>
        <div>
          <Bell fill="white" />
          <span>12</span>
        </div>

        <div>
          <SmilePlus />
          <span>9</span>
        </div>

        <div>
          <img src="/images/ps-plus.svg" alt="PS Plus" width={24} height={24} />
          <div>
            <img src="" alt="" />
            <div>
              <div>FallingStickman</div>
              <div>
                <Trophy fill="white " />
                <span>14</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
