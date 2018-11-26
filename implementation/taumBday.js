import {BigNumber} from 'bignumber.js';

function taumBday(blackGifts, whiteGifts, blackGiftCost, whiteGiftCost, conversionCost) {
    const priceBlackGift = BigNumber.min(blackGiftCost, whiteGiftCost + conversionCost);
    const priceWhiteGift = BigNumber.min(whiteGiftCost, blackGiftCost + conversionCost);
    return priceBlackGift.times(blackGifts).plus(priceWhiteGift.times(whiteGifts));
}

export default taumBday;