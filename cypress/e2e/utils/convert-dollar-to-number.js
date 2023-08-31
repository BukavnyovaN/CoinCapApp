export const convertDollarToNumber = (dollarNotationValue) => {
    return +(dollarNotationValue.replace(/(\$+|,+|[a-zA-Z]+|:+)/gm, ''));
}