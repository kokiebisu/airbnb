import React from "react";

/** Vectors */
import { Exclamation } from "../../../public/svg/original";

/** Props */
import { RequiredBulletProps } from "./props";

/** Styles */
import font from "../../../styles/font.module.scss";
import layout from "../../../styles/layout.module.scss";
import space from "../../../styles/space.module.scss";
import color from "../../../styles/color.module.scss";

export const RequiredBullet: React.FC<RequiredBulletProps> = ({ message }) => {
  return (
    <div className={[layout["flex"], layout["items-center"]].join(" ")}>
      <div className={[space["m-r--4"]].join(" ")}>
        <Exclamation width={16} stroke="#C54A32" strokeWidth={2} />
      </div>
      <div>
        <p className={[font["size--12"], color["c--warning"]].join(" ")}>
          {message}
        </p>
      </div>
    </div>
  );
};
