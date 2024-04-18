"use client";

import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import { photos } from "./constants";
import { useState } from "react";
import "yet-another-react-lightbox/styles.css";
import NextJSImage from "./NextJSImage";

export default function Page() {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <PhotoAlbum
        layout="columns"
        photos={photos}
        renderPhoto={NextJSImage}
        // targetRowHeight={150}
        onClick={({ index: current }) => setIndex(current)}
      />

      <Lightbox
        index={index}
        slides={photos}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </>
  );
}
