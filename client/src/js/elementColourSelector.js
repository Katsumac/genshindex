export default function elementColorSelector(element) {
    switch (element) {
        case "Anemo":
            return "#3DB3B7";
        case "Geo":
            return "#BC9746";
        case "Electro":
            return "#8A58B9";
        case "Dendro":
            return "#7AAC3E";
        case "Hydro":
            return "#3A75BC";
        case "Pyro":
            return "#B86042";
        case "Cryo":
            return "#74D1E1";
        default:
            return "#FFFFFF";
    }
}