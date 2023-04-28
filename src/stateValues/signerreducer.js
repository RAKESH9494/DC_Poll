const initial ={
}
export default function signerreducer(state = initial,action){
    const {type,payload} =action;
    switch(type){
        case  "SETSIGNER":
            return {payload};
        default :
            return state;
    }
}
