export default function rarityColorSelector(rarity) {
    switch (rarity) {
        case 1:
            return "#77828E";
        case 2:
            return "#659585";
        case 3:
            return "#436492"
        case 4:
            return "#8D72A8";
        case 5:
            return "#C69C4F";
        default:
            return "#FFFFFF";
    }
}