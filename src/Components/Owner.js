    import { Contract, ethers } from 'ethers';
    import { connect } from 'react-redux';
    import './HomeStyles.css'
    import { useNavigate } from 'react-router-dom';
    import React, { useEffect,useState } from 'react'
    const Owner = ({provider,signer,contract}) => {
      const [acc,setAcc] = useState("null");
      const  navigate =useNavigate();
      useEffect(()=>{
        const connectWallet= async()=>{
        try{
          const {ethereum} = window;
          if(ethereum){
            const account = await ethereum.request({method:"eth_requestAccounts",})
            window.ethereum.on("chainChanged",()=>{
              window.location.reload();
            })
            setAcc(account);
          }else{
            setAcc("Null");
          }
          }catch(error){{
            console.log(error);
          }
        }}
        connectWallet()
        alert("Only Owner : 0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266 Can POST")
    },[]);
        const submitHandler = async(e)=>{
            e.preventDefault();
            const name = document.querySelector("#name").value;
            const Add = document.querySelector("#address").value;
            const icon = document.querySelector("#icon").value;
            const Ilink = document.querySelector("#iconLink").value;
            try{
              const amount = {value : ethers.utils.parseEther("0.001")}; 
              const transaction = await contract.InputParticipent(name,Add,icon,Ilink,amount);
              await transaction.wait();
              alert("POSTED");
            }catch(error){
              alert(error)
            }
            document.querySelector("#name").value='';
            document.querySelector("#address").value='';
            document.querySelector("#icon").value='';
            document.querySelector("#iconLink").value='';   
        }
        const handler1  = async(e) =>{
          const {ethereum} = window
          const permissions = await ethereum.request({
            method: 'wallet_requestPermissions',
            params: [{
              eth_accounts: {},
            }]
          });
          permissions();
        }
      return (
        <div>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">VOTING APP</a>
    <button class="navbar-toggler" type="button" data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
      aria-label="Toggle navigation">
      <i class="fas fa-bars text-light"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto d-flex flex-row mt-3 mt-lg-0">
        <li class="nav-item text-center mx-2 mx-lg-1">
          <a class="nav-link active" href="#!">
            NEWS
          </a>
        </li>
        <li class="nav-item text-center mx-2 mx-lg-1">
          <a class="nav-link active" onClick={handler1}>
            CHANGE
          </a>
        </li>
      </ul>
      <form class="d-flex input-group w-auto ms-lg-3 my-3 my-lg-0">
        {/* <input type="search" class="form-control" placeholder="Search" aria-label="Search" /> */}
        <button class="btn btn-primary" type="button" data-mdb-ripple-color="dark">
          {`CONNECTED : ${acc}`}
        </button>
      </form>
    </div>
  </div>
</nav>
<div class="container1">
  <div class="cn2">
          <center>
          <h3 class="heading">WELCOME TO ADMIN PAGE</h3><br/>
          <h2 class="heading1">POST CONTESTENS</h2><br/>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder='NAME' id="name"/><br/><br/>
                <input type="text" placeholder='ADDRESS' id="address"/><br/><br/>
                <input type="text" placeholder='ICON NAME'  id="icon"/><br/><br/>
                <input type="text" placeholder='ICON IMG LINK' id="iconLink"/><br></br><br/>
                <input type="submit" />
              </form>
            </center>
    </div>
  </div>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto d-flex flex-row mt-3 mt-lg-0">
        <li class="nav-item text-center mx-2 mx-lg-1">
          <a class="nav-link active" aria-current="page" href="mailto:ummadirakesh9494@gmail.com?subject=Hello RAKESH">
            <img src="https://cdn-icons-png.flaticon.com/512/3178/3178158.png" alt="none" width={"30rem"}/>
          </a>
        </li>
        <li class="nav-item text-center mx-2 mx-lg-1">
          <a class="nav-link active" href="https://www.instagram.com/rakesh_rockey28">
            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384015.png" alt="none" width={"30rem"}/>
          </a>
        </li>
        <li class="nav-item dropdown text-center mx-2 mx-lg-1">
          <a class="nav-link active" href="https://github.com/RAKESH9494" >
            <img src="https://cdn-icons-png.flaticon.com/128/1051/1051326.png" alt="none" width={"30rem"}/>
          </a>
        </li>
      </ul>
      <ul class="navbar-nav ms-auto d-flex flex-row mt-3 mt-lg-0">
        <li class="nav-item text-center mx-2 mx-lg-1">
          <a class="nav-link active" href="#!">
            RAKESH UMMADI
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
      )
    }
    const mapStateToProps = state =>({
      provider : state.providerreducer.payload,
      signer : state.signerreducer.payload,
      contract : state.contractreducer.payload
    })
    export default connect(mapStateToProps)(Owner);