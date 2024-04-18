"use client";

import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import { designs } from "./constants";
import { useState } from "react";
import "yet-another-react-lightbox/styles.css";
import NextJSImage from "./NextJSImage";

export default function Page() {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <PhotoAlbum
        layout="columns"
        photos={designs}
        renderPhoto={NextJSImage}
        onClick={({ index: current }) => setIndex(current)}
      />

      <Lightbox
        index={index}
        slides={designs}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </>
  );
}
