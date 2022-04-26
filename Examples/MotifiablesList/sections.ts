import { MotifiableKey } from "motifiables";
import { SectionListData } from "react-native";

const sections: SectionListData<MotifiableKey, {title: string}>[] = [
  {
    title: "Attention Seekers",
    data: [
      "bounce",
      "flash",
      "jello",
      "pulse",
      "rotate",
      "rubberBand",
      "shake",
      "swing",
      "tada",
      "wobble",
    ],
  },
  {
    title: "Bouncing Entrances",
    data: [
      "bounceIn",
      "bounceInDown",
      "bounceInUp",
      "bounceInLeft",
      "bounceInRight",
    ],
  },
  {
    title: "Bouncing Exits",
    data: [
      "bounceOut",
      "bounceOutDown",
      "bounceOutUp",
      "bounceOutLeft",
      "bounceOutRight",
    ],
  },
  {
    title: "Fading Entrances",
    data: [
      "fadeIn",
      "fadeInDown",
      "fadeInDownBig",
      "fadeInUp",
      "fadeInUpBig",
      "fadeInLeft",
      "fadeInLeftBig",
      "fadeInRight",
      "fadeInRightBig",
    ],
  },
  {
    title: "Fading Exits",
    data: [
      "fadeOut",
      "fadeOutDown",
      "fadeOutDownBig",
      "fadeOutUp",
      "fadeOutUpBig",
      "fadeOutLeft",
      "fadeOutLeftBig",
      "fadeOutRight",
      "fadeOutRightBig",
    ],
  },
  {
    title: "Lightspeed",
    data: ["lightSpeedIn", "lightSpeedOut"],
  },
  {
    title: "Sliding Entrances",
    data: ["slideInDown", "slideInUp", "slideInLeft", "slideInRight"],
  },
  {
    title: "Sliding Exits",
    data: ["slideOutDown", "slideOutUp", "slideOutLeft", "slideOutRight"],
  },
  {
    title: "Zooming Entrances",
    data: ["zoomIn", "zoomInDown", "zoomInUp", "zoomInLeft", "zoomInRight"],
  },
  {
    title: "Zooming Exits",
    data: [
      "zoomOut",
      "zoomOutDown",
      "zoomOutUp",
      "zoomOutLeft",
      "zoomOutRight",
    ],
  },
];

export default sections;
