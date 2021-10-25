export const priceSeparator = price => {
    let p = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '/');
    return p;
};

export const createZeroSmallPrice = price => {
    let firstPart, lastPart;
    price = price + ''
    firstPart = price.substring(0, price.length - 3);
    lastPart = price.slice(price.length - 3);
    firstPart = priceSeparator(firstPart)
    lastPart = '/' + lastPart
    return { firstPart, lastPart }
}