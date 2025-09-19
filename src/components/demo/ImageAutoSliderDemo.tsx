// This is file with demos of your component
// Each export is one usecase for your component

import { ImageAutoSlider } from "@/components/ui/ImageAutoSlider";

const DemoOne = () => {
  return <ImageAutoSlider />;
};

const DemoWithCustomImages = () => {
  const customImages = [
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];
  
  return <ImageAutoSlider images={customImages} duration={15} imageSize="lg" />;
};

const DemoSmallSize = () => {
  return <ImageAutoSlider imageSize="sm" duration={30} />;
};

const DemoCustomDuration = () => {
  return <ImageAutoSlider duration={10} />;
};

export { DemoOne, DemoWithCustomImages, DemoSmallSize, DemoCustomDuration };
