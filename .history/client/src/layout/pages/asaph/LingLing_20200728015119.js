import React from "react";
import asaph from "../imagesofinstruments/asaph.mp4";

export default function LingLing() {
  return (
    <div>
      <iframe
        width="700px"
        height="380px"
        src={asaph}
        frameborder="0"
        allowfullscreen
        className="move_myself_up"
      ></iframe>
    </div>
  );
}
