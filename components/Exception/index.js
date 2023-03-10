import React, { createElement } from "react";
import classNames from "classnames";
import { Button } from "antd";
import config from "./typeConfig";
const ExceptionComponent = ({
  className,
  backText = "back to home",
  linkElement = "a",
  type,
  title,
  desc,
  img,
  actions,
  ...rest
}) => {
  const pageType = type in config ? type : "404";
  const clsString = classNames("exception", className);
  return (
    <div className={clsString} {...rest}>
      <div className="imgBlock">
        <div
          className="imgEle"
          style={{ backgroundImage: `url(${img || config[pageType].img})` }}
        />
      </div>
      <div style={{ background: "transparent" }} className="content">
        <h1>{title || config[pageType].title}</h1>
        <div className="desc">{desc || config[pageType].desc}</div>
        <div className="actions">
          {actions ||
            createElement(
              linkElement,
              {
                to: "/",
                href: "/",
              },
              <Button type="primary">{backText}</Button>
            )}
        </div>
      </div>
    </div>
  );
};

export default ExceptionComponent;
