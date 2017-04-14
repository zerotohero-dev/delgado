
const decorate = ( ...fns ) => ( ...args ) => {
    let result;

    fns.forEach( ( fn ) => { result = fn( ...args ); } );

    return result;
};

const noop = () => {};

const invert = ( fn ) => ( ...args ) => !fn( ...args );

const identity = ( x ) => x;

module.exports = {
    identity,
    invert,
    decorate,
    noop
};
