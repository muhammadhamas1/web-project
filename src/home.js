import './home.css';
import Navbar from './navbar';

const Home= () => {

    return(
        <div>
        <Navbar/>

        <div>
          


          <div className="back-img ">
           

            {/* <div className="header-nav">
              <span className=""> Unique Travels </span>
            </div> */}



            <div className="slogan moving-text">
              <h1>
                <span>always Travel</span>
                <div className="message">
                  <div className="word1">Uniquely</div>
                  <div className="word2">Safely</div>
                  <div className="word3">with a smile</div>
                </div>
              </h1>
            </div>
          </div>
        </div>
      </div>
    )

}

export default Home;