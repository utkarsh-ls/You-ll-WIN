function covertToNumber(rawCount) {
    /*
     * If the raw count is a number then not doing anything otherwise converting it to a number
     */
    if (rawCount.indexOf(" ") > 0) {
        return -1;
    }

    if (!isNaN(rawCount)) {
        if (rawCount.split("").reverse()[0] === ".") {
            return rawCount;
        }
        return +rawCount;
    } else {
        if (typeof rawCount === "string") {
            const prefix = rawCount.split("").reverse()[0].toUpperCase();
            if (prefix !== "M" && prefix !== "K" && prefix !== "B") {
                return -1;
            }
            if (isNaN(rawCount.substring(0, rawCount.length - 1))) {
                return -1;
            }
            const multiplier =
                prefix === "K" ? 1000 : prefix === "M" ? 1000000 : 1000000000;
            return +rawCount.substring(0, rawCount.length - 1) * multiplier;
        }
    }
}
