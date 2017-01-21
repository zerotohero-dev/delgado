
const decorate = ( ...fns ) => ( ...args ) => {
    let result;

    fns.forEach( ( fn ) => { result = fn( ...args ); } );

    return result;
};

exports.decorate = decorate;
