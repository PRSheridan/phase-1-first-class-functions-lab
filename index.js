
const returnFirstTwoDrivers = function(names) {
    return names.slice(0, -2);
}

const returnLastTwoDrivers = function(names) {
    return names.slice(2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (mult) {
    return function (fare){
        return fare * mult;
    }
}

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare);
}

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(driversArray, driversFunction) {
    return driversFunction(driversArray);
}