import {saveAs} from "file-saver";

const downloadImageOfArtObject = (image, imageTitle) => {
    saveAs(image, `${imageTitle}.jpg`);
}

export default downloadImageOfArtObject;