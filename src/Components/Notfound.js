import React from 'react'
import './HomeStyles.css'
import { useEffect,useState } from 'react';
const Notfound = () => {
  const[acc,setAcc] = useState();
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
      connectWallet();
  },[])
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
          <a class="nav-link active" href="#!">
            CHECK
          </a>
        </li>
      </ul>
      <form class="d-flex input-group w-auto ms-lg-3 my-3 my-lg-0">
        <button class="btn btn-primary" type="button" data-mdb-ripple-color="dark">
          {`CONNECTED : ${acc}`}
        </button>
      </form>
    </div>
  </div>
</nav>
<div className='cont'>
  <br/>
<h3>WELLCOME TO DECENTRALIZED VOTING APP</h3><br/>
<div class="read">
  <p>This is a Decentralized Voting app.It aims to make use of their vote in legid and secure manner.It is User Frndly and Everyone understand easily.
    The Voter need to connect metamask wallet first.Where the Voter can obeserve his address at right top wheather the wallet connected or not.
    Each address has only one chance to Vote.
  </p>
  <p>Thank You....</p>
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

export default Notfound