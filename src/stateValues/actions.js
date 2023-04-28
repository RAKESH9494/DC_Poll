export const setProvider = (provider) => async dispatch =>{
    dispatch({
        type :"SETPROVIDER",
        payload:provider
    
    })
}
export const setContract = (contract) => async dispatch =>{
    dispatch({
        type :"SETCONTRACT",
        payload:contract
    
    })
}
export const setSigner = (signer) => async dispatch =>{
    dispatch({
        type :"SETSIGNER",
        payload:signer
    
    })
}