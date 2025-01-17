// Determines whether to use the Circlet of Logos or Flower of Life artifact image
export default function artifactPieceSelector(name) {
    if (name.substring(0, 7) === "prayers") {
        return "circlet-of-logos";
    }
    return "flower-of-life";
}