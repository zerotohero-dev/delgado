
const decorate = ( ...fns ) => ( ...args ) => {
    let result;

    fns.forEach( ( fn ) => { result = fn( ...args ); } );

    return result;
};

const box = ( x ) => () => x;

const returnTrue = () => box( true );

const returnFalse = () => box( false );

const returnNull = () => box( null );

const returnZero = () => box( 0 );

const returnUndefined = () => box();

const returnObject = () => ( {} );

const noop = () => {};

const identity = ( x ) => x;

const invert = ( fn ) => ( ...args ) => !fn( ...args );

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
    returnNull,
    returnZero,
    returnObject,
    returnUndefined
};
