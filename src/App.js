import React from 'react'
import abi from './artifacts/contracts/PollingDapp.sol/PollingDapp.json'
import { ethers } from 'ethers'
import { connect } from 'react-redux'
import { useState,useEffect } from 'react'
import Notfound from './Components/Notfound'
import View from './Components/View'
import {setProvider} from './stateValues/actions'
import { setSigner } from './stateValues/actions'
import { setContract } from './stateValues/actions'
import Owner from './Components/Owner'
import Home from './Components/Home'
import { Web3Provider } from "@ethersproject/providers";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const App = ({setProvider,setSigner,setContract}) => {
  const [state,SetSate] = useState({
    provider:null,
    singner:null,
    contract:null
  });
  useEffect(()=>{
      const connectWallet= async()=>{
        const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
        const contractABI = abi.abi;
      try{
        const {ethereum} = window;
        if(ethereum){
          const account = await ethereum.request({method:"eth_requestAccounts",})
          window.ethereum.on("chainChanged",()=>{
            window.location.reload();
          })
          const provider = new Web3Provider(ethereum);
          const singner = provider.getSigner();
          const contract = new ethers.Contract(contractAddress,contractABI,singner);
          SetSate({provider,singner,contract});
          setProvider(provider);
          setSigner(singner);
          setContract(contract);
        }else{
          alert("Install Metamask");
        }
        }catch(error){{
          console.log(error);
        }
      }}
      connectWallet();

  },[])
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Owner" element={< Owner/>}></Route>
        <Route path="/Results" element={<View/>}></Route>
        <Route path="/hi" element={<Notfound/>}></Route>
      </Routes>
      </BrowserRouter>
      {/* <p>CONNECTED TO :{acc}</p> */}  
      {/* <Owner state={state}></Owner> */}
      {/* <Home state={state}></Home> */}
      {/* <View state={state}></View> */}
      {/* <Header></Header> */}
      </div>
  )
}

const mapStateToProps = state =>({
})
export default connect(mapStateToProps,{setProvider,setSigner,setContract})(App)
