export default function artifactPieceSelector(name) {
    if (name.substring(0, 7) === "prayers") {
        return "circlet-of-logos";
    }
    return "flower-of-life";
}