 export function cashBack(usial, high, special){
    const backUssial = 0.01;
    const backHigh = 0.05;
    const backSpecial = 0.3;
    const cashBackUsial = usial * backUssial;
    const cashBackHigh = high * backHigh;
    const cashBackSpecial = special * backSpecial;
    return cashBackUsial + cashBackHigh + cashBackSpecial;
}

