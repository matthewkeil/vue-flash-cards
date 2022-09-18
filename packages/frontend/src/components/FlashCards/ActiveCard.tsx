import React, { useRef, useState } from "react";
// import { makeStyles } from "@material-ui/styles";

// import Typography from "@material-ui/core/Typography";

import { IpfsMeta } from "./ActiveCard.types";

import "./ActiveCard.scss";

// const useStyles = makeStyles({
//   container: {
//     zIndex: 2,
//     transition: "all var(--stack-move-time)",
//     boxShadow: "0 5px 10px 0 rgba(78, 78, 78, 0.2), 0 15px 20px 0 rgba(78, 78, 78, 0.1)"
//   }
// });
export interface ActiveCardProps {
  flipped: boolean;
  flipDownActive: boolean;
  frontToBackActive: boolean;
  flipDownTime?: number;
  frontToBackTime?: number;
  onClick?: (...args: any[]) => any;
}

export const ActiveCard: React.FC<ActiveCardProps> = ({
  flipped,
  flipDownActive,
  frontToBackActive,
  flipDownTime,
  frontToBackTime,
  onClick = () => {},
}) => {
  // const classes = useStyles();
  // const frontToBackActive = useRef<boolean>(false);
  // const flipDownActive = useRef<boolean>(false);
  // const [isFlipped, setIsFlipped] = useState<boolean>(false);

  // function flipCard(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
  //   event.preventDefault();
  //   setIsFlipped((flipped) => !flipped);
  // }

  // function frontToBack() {
  //   frontToBackActive.current = true;
  //   setTimeout(() => {
  //     frontToBackActive.current = false;
  //   }, frontToBackTime);
  // }

  // function flipDown() {
  //   flipDownActive.value = true;
  //   setTimeout(() => {
  //     flipDownActive.value = false;
  //   }, props.flipDownTime);
  // }

  function getContainerClasses() {
    let containerClasses = `container relative w-full h-full bg-transparent`;
    if (frontToBackActive) {
      containerClasses += " frontToBackActive";
    } else if (flipDownActive) {
      containerClasses += " flipDownActive";
    }
    return containerClasses;
  }

  function getCardClasses() {
    let cardClasses =
      "card absolute justify-center items-center grid w-full h-full rounded-3xl";
    if (flipped) {
      cardClasses += " flipped";
    }
    return cardClasses;
  }

  return (
    <div className="absolute">
      <div
        className={getContainerClasses()}
        style={
          {
            "--front-to-back-time": `${frontToBackTime}ms`,
            "--flip-down-time": `${flipDownTime}ms`,
          } as any
        }
        onClick={onClick}
      >
        <div className={getCardClasses()}>
          <div className="front absolute justify-center items-center grid w-full h-full rounded-3xl bg-white">
            <slot name="front" />
          </div>
          <div className="back absolute justify-center items-center grid w-full h-full rounded-3xl bg-white">
            <slot name="back" />
          </div>
        </div>
      </div>
    </div>
  );
};
