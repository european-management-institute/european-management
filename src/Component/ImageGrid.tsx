import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// Keep all your existing imports
import emiLogo from "../assets/Digital/2dedaf54-76c7-495b-9f6b-6f93773ea574.webp";
import lucaImg from "../assets/Digital/2F7A0425.webp";
import srcc from "../assets/Digital/8a62a2dd-eea1-4e6d-87f2-6da7bce8dede.webp";
import bt from "../assets/Digital/58dbb989-4390-451e-9d0c-99af22affb67.webp";
import bt2 from "../assets/Digital/78e94317-4b65-4ac7-a69b-a5783dc54fef.webp";
import bt3 from "../assets/Digital/DSC03430.webp";
// import bt4 from "../assets/Digital/DSC04624.webp";
import bt5 from "../assets/Digital/DSC06123.webp";
import bt6 from "../assets/Digital/DSC06429.webp";
// import bt7 from "../assets/Digital/DSC07278.webp";
import bt8 from "../assets/Digital/DSC08132.webp";
import bt9 from "../assets/Digital/DSC08299.webp";
// import bt10 from "../assets/Digital/DSC08311.webp";
import bt11 from "../assets/Digital/DSCF7770.webp";
import bt12 from "../assets/Digital/DSCF7854.webp";
import bt14 from "../assets/Digital/DSCF7940.webp";
// import bt13 from "../assets/Digital/GSP01960.webp";
// import bt15 from "../assets/Digital/GSP02264.webp";
// import bt16 from "../assets/Digital/GSP02529.webp";
// import bt17 from "../assets/Digital/GSP02621.webp";
import bt18 from "../assets/Digital/Screenshot 2024-11-04 alle 17.21.28.webp";
import bt19 from "../assets/Digital/Screenshot 2024-11-04 alle 17.22.56.webp";
import bt20 from "../assets/Digital/Screenshot 2024-11-04 alle 17.36.09.webp";
import bt21 from "../assets/Digital/Screenshot 2024-11-04 alle 17.36.19.webp";

const ImageGrid = () => {
  const images = [
    { src: emiLogo },
    // { src: lucaImg },
    { src: srcc },
    { src: bt },
    { src: bt2 },
    { src: bt3 },
    // { src: bt4 },
    { src: bt5 },
    { src: bt6 },
    // { src: bt7 },
    { src: bt8 },
    { src: bt9 },
    // { src: bt10 },
    { src: bt11 },
    { src: bt12 },
    // { src: bt13 },
    { src: bt14 },
    // { src: bt15 },
    // { src: bt16 },
    // { src: bt17 },
    { src: bt18 },
    { src: bt19 },
    // { src: bt20 },
    // { src: bt21 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group col-span-2 row-span-2"
            style={{ paddingBottom: "100%" }}
          >
            <LazyLoadImage
              src={image.src}
              alt={`Gallery image ${index + 1}`}
              effect="blur"
              className="absolute inset-0 w-full h-full object-cover rounded-lg transition-all duration-300 group-hover:scale-105"
              wrapperClassName="absolute inset-0"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
