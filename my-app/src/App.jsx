import './App.css';
import Inputs from './inputs';

function App() {

  return (
    <>
      {/* Info box */}
      <header>
        <h1>Learn to code by watching others</h1>
        <h4>
          See how experienced developers solve 
          problems in real-time. Watching scripted 
          tutorials is great, but understanding 
          how developers think is invaluable. 
        </h4>
      </header>
      {/* Offer box */}
      <section>
        <div className='purple-div'>
          <p className='purple-div-p'>
            <b>Try it free 7 days </b>
            then $20/mo. thereafter
          </p>
        </div>
        {/* Input box */}
        <div className='white-box'>
          <Inputs/>
          <p className='terms-and-services'>
            By clicking the button, you are 
            agreeing to our 
              <b className='orange-bold-txt'> Terms and Services</b>
          </p>
        </div>
      </section>
    </>
  );
};


export default App;

