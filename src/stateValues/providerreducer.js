const initial ={
}
export default function providerreducer(state = initial,action){
    const {type,payload} =action;
    switch(type){
        case  "SETPROVIDER":
            return {payload};
        default :
            return state;
    }
}
