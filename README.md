fetch({
body: {
optionProperties: <current option props go here>,
plotProperty: ['optionPrice'],
axisParameter: {
impliedVolatility: {
range: [0.5, 0.8],
step: 0.01,
},
expiryDate: {
range: ['2024-01-01', '2024-06-01'],
step: 1,
},
underlyingPrice: {
range: [100, 150],
step: 1,
}
},
}
});

export const CreateGraphCollector = () => {};
