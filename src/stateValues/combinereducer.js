import { combineReducers } from "redux";
import contractreducer from "./contractreducer";
import providerreducer from "./providerreducer";
import signerreducer from "./signerreducer";
const reducer = combineReducers({
    contractreducer : contractreducer,
    providerreducer:providerreducer,
    signerreducer:signerreducer
})
export default reducer;