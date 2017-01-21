
const decorate = ( ...fns ) => ( ...args ) => {
    let result;

    fns.forEach( ( fn ) => { result = fn( ...args ); } );

    return result;
};

const noop = () => {};

exports.decorate = decorate;
exports.noop = noop;