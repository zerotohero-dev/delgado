
const decorate = ( ...fns ) => ( ...args ) => {
    let result;

    fns.forEach( ( fn ) => { result = fn( ...args ); } );

    return result;
};

const noop = () => {};

const identity = ( x ) => x;

const invert = ( fn ) => ( ...args ) => !fn( ...args );

const box = ( x ) => () => x;

const toFunction = ( x ) => if typeof x === 'function' ? x : box( x );

const toObject = ( x ) => if typeof x === 'object' ? x : { __ref: x };

module.exports = {
    box,
    identity,
    invert,
    decorate,
    noop,
    toFunction,
    toObject
};
