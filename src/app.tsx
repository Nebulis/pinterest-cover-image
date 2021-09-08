import React, { useState } from "react";
import styles from "./app.module.css";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpg";
import image5 from "./images/image5.jpg";
import image6 from "./images/image6.jpg";
import image7 from "./images/image7.jpg";
import image8 from "./images/image8.jpg";
import { toJpeg } from "html-to-image";

const images = [image1, image2, image3, image4, image5, image6, image7, image8];
const margins = [0, -200, -370, -200, 0, -200];
const imagesPosition: string[] = [];
imagesPosition[3] = image2;
imagesPosition[4] = image7;
imagesPosition[1] = image4;
imagesPosition[11] = image5;
imagesPosition[16] = image4;

function App() {
  const [truc] = useState(Array.from({ length: 6 }, (v, i) => i));
  return (
    <div className="my-root flex bg-gray-200 items-center justify-center w-full">
      <button
        onClick={() => {
          toJpeg(document.getElementById("image")!, {
            quality: 0.95,
            style: {
              background: "white",
              margin: "0",
              // py-3 px-4
              padding: "0.75rem 1rem",
              // rounded-sm
              // borderRadius: "0.35rem",
            },
          }).then(function (dataUrl) {
            console.log("go");
            // var img = new Image();
            // img.src = dataUrl;
            // document.body.appendChild(img);
            var link = document.createElement("a");
            link.download = "my-image-name.jpeg";
            link.href = dataUrl;
            link.click();
          });
        }}
      >
        ClickMe
      </button>
      <div id="image" className={`bg-white ${styles.imageContainer}`}>
        <div className={`${styles.imageSecondContainer} flex`}>
          {truc.map((t) => (
            <div className={styles.imageColContainer} key={t} style={{ marginTop: `${margins[t] || 0}px` }}>
              <div className={styles.imageAnotherContainer}>
                <div className={`${styles.image} ${styles[`image${t}`]}`}>
                  <img src={imagesPosition[t * 3] || images[(t * 3) % images.length]} />
                </div>
              </div>
              <div className={styles.imageAnotherContainer}>
                <div className={`${styles.image} ${styles[`image${t}`]}`}>
                  <img src={imagesPosition[t * 3 + 1] || images[(t * 3 + 1) % images.length]} />
                </div>
              </div>
              <div className={styles.imageAnotherContainer}>
                <div className={`${styles.image} ${styles[`image${t}`]}`}>
                  <img src={imagesPosition[t * 3 + 2] || images[(t * 3 + 2) % images.length]} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
