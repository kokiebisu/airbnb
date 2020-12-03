import React from "react";
import { Banner } from "../../components/organisms/banner/banner.component";
import { Header } from "../../components/organisms/header/header.component";
import { Section } from "../../components/organisms/section/section.component";
import layout from "../../styles/layout.module.scss";
import { Footer } from "../../components/organisms/footer/footer.component";
import space from "../../styles/space.module.scss";

const OnlineHost = () => {
  return (
    <div>
      <div>
        <Header type="onlinehost" />
      </div>
      <div>
        <div className={[layout["container"]].join(" ")}>
          <Banner type="onlinehost" />
        </div>
      </div>
      <div className={[layout["container"]].join(" ")}>
        <Section type="works" />
      </div>
      <div
        className={[layout["container--shrink"], space["p-v--64"]].join(" ")}
      >
        <Section type="sharing" />
      </div>
      <div className={[layout["container"], space["p-v--64"]].join(" ")}>
        <Section type="back" />
      </div>
      <div className={[layout["container"], space["p-v--100"]].join(" ")}>
        <Section type="faq" />
      </div>
      <div>
        <Section type="more" />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default OnlineHost;
