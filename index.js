
const decorate = ( ...fns ) => ( ...args ) => {
    let result;

    fns.forEach( ( fn ) => { result = fn( ...args ); } );

    return result;
};

const returnTrue = () => true;

const returnFalse = () => false;

const returnNull = () => null;

const noop = () => {};

const identity = ( x ) => x;

const invert = ( fn ) => ( ...args ) => !fn( ...args );

const box = ( x ) => () => x;

const toFunction = ( x ) => typeof x === 'function' ? x : identity;

const toObject = ( x ) => typeof x === 'object' ? x : {};

module.exports = {
    box,
    identity,
    invert,
    decorate,
    noop,
    toFunction,
    toObject,
    returnTrue,
    returnFalse,
    returnNull
};
