export function getMinifyOptions(isProductionEnvironment) {
    const minifyOptions = {
        collapseBooleanAttributes: isProductionEnvironment,
        collapseWhitespace: isProductionEnvironment,
        conservativeCollapse: isProductionEnvironment,
        removeAttributeQuotes: isProductionEnvironment,
        removeEmptyAttributes: isProductionEnvironment,
        removeRedundantAttributes: isProductionEnvironment,
    };

    return minifyOptions;
}
