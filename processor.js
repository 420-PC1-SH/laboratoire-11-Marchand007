function processor(transmission) {
    if (transmission.indexOf("::") < 0) {
        return -1;
    }
    
    let parts = transmission.split("::");

    let size = parts[1].length;
    let first = parts[1].charAt(0);
    let last = parts[1].charAt(size - 1);

    if (first != "<" || last != ">") {
        return -1;
    }
    return {
        id: Number.parseInt(parts[0]),
        rawData: parts[1]
    };

}

module.exports = processor;
