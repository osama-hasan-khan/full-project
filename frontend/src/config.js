import useMouse from "@react-hook/mouse-position";

export const useVariants = (ref) => {
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });
};

let mouseXPosition = 0;
let mouseYPosition = 0;

if (mouse.clientX !== null) {
  mouseXPosition = mouse.clientX;
}

if (mouse.clientY !== null) {
  mouseYPosition = mouse.clientY;
}
