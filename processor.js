function processor(transmission) {
    if (transmission.indexOf("::") < 0) {
        return -1;
    }
    
    let parts = transmission.split("::");
    return {
        id: Number.parseInt(parts[0])
    };

}

module.exports = processor;
