import React, { useEffect, useState } from 'react'
import "./HomeStyles.css"
import { connect } from 'react-redux';
const Home = ({contract}) => {
  const [data,setData] = useState([]);
  const [acc,setAcc] = useState();
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
    const gettingData = async(e) =>{
      const mem = await contract.GetData();
      setData(mem)
    } 
    connectWallet();
    contract && gettingData()
},[contract]);
function submitVote(address,c){
  const hadnler = async(e) =>{
    try{
     const transaction = await contract.SelectVote(address)
     transaction.wait()
     alert("Submited")
    }catch(error){
      alert(error)
    }
  }
  contract && hadnler();
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
      <ul class="navbar-nav me-auto d-flex flex-row mt-3 mt-lg-0">
        <li class="nav-item text-center mx-2 mx-lg-1">
          <a class="nav-link active" aria-current="page" href="Owner">
            ADMIN
          </a>
        </li>
        <li class="nav-item text-center mx-2 mx-lg-1">
          <a class="nav-link active" href="hi">
            ABOUT
          </a>
        </li>
        <li class="nav-item dropdown text-center mx-2 mx-lg-1">
          <a class="nav-link active" href="Results" >
            LIVE
          </a>
        </li>
      </ul>
      <ul class="navbar-nav ms-auto d-flex flex-row mt-3 mt-lg-0">
        <li class="nav-item text-center mx-2 mx-lg-1">
          <a class="nav-link active" href="#!">
            NEWS
          </a>
        </li>
        <li class="nav-item text-center mx-2 mx-lg-1">
          <a class="nav-link active" href="#!" onClick={handler1}>
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
    <div class="main">
       <h3 class="heading">HAVE A VISION? MAKE THE RIGHT DECISION</h3><br/>
          { data.length == 0 ? <h2>Not Posted Yet</h2>:
              data.map((deatils)=>
             <div class="co">
                  <img src={deatils.imageLink} alt="none" width={"200px"} class="imgStyle"/> &nbsp;
                    <button onClick={()=>submitVote(deatils.from,deatils.count)}>VOTE</button><br/><br/>
                </div>
                )
            }
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
export default connect(mapStateToProps)(Home);

