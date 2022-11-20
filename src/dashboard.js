import './dashboard.css';
import Navbar from './navbar';

const Dashboard = () => {
    return (
        <div className='back-img'>
            <br /><br /><br /><br /><br /><br /><br /><br />
            <Navbar/>
       
<div className="content container d-flex justify-content-center ">
          
          <div className="rdc">
            
                <div className='inner-container'>
                    <h3>Tiger Movers Ticketing System</h3>
                    <hr></hr>
                
                    <form >
                        <div className='row'>
                            <div className='col-md-3 mb-4'>
                            <h5 style={{"margin-left":"5%"}}>To</h5>
                                <select  name="ad_account_selected" data-style="btn-new" class="selectpicker" >
                                    <option> Departure Location</option>
                                    <option>Lahore</option>
                                    <option>Islamabad</option>
                                    <option>Multan</option>
                                    <option>Karachi</option>
                                </select>
                            </div>
    
                            <div className='col-md-3 mb-4'>
                                <h5 style={{"margin-left":"5%"}}>From</h5>
                                <select  name="ad_account_selected" data-style="btn-new" className="selectpicker" >
                                    <option> Arrival Location</option>
                                    <option>Layya</option>
                                    <option>Islamabad</option>
                                    <option>Peshawar</option>
                                    <option>Rawalpindi</option>
                                </select>
                            </div>
                            
    
                            <div className='col-md-3 mb-4'>
                                <div >
                                    <h5 style={{"margin-left":"5%"}}>Date</h5>
                                    
                                    {/* <input className='selectpicker'  name="txtDate" id="txtDate" type="date"></input> */}
                                    {/* onDisable */}
                                    <input type="date" name="date" />
                                </div>
                            </div>
    
    
                            <div className='col-md-3'  style={{"margin-top":"37px"}}>
                                <div className='d-flex justfy-content-center'>
                                <button className=" btn btn-primary btn-new" >Submit</button>
                                </div>
                            </div>
                        </div>
                       
                    </form>
                    <div>
                    </div>
                </div>
           
            </div>
    
                  </div>
                  </div>
    
    )
}
export default Dashboard;