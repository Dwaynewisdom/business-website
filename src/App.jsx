import './App.css'

function App() {

  return (
    <div className="mainpage">
      <div className = "homepage">
        <div className='nav-bar'>
          <h1 className='company-name'>AN<span className='company-name-highlight'>L</span></h1>
        </div>
        <div className='company-slogan'>
          <p className='slogan'><span className='We'>WE</span><span className='build'>BUILD</span><br></br><span className='slogan-highlight'>DIGITAL</span><span className='slogan-highlights'>FUTURES</span></p>
        </div>
        <div className='company-description'>
          <p className='description'>ANL is a web-development company handled and developed by one individual with the hope of giving customers <strong> A New Look</strong> at your business.</p>
        </div>
        <div className='start-a-project'>
          <a href='' className='start-project'>START A PROJECT</a>
          <a href='' className='view-Projects'>VIEW PROJECTS</a>
        </div>
      </div>

      <div className='marquee-wrap'>
        <div className='group'>
          <div className='card'>Web Development</div>
          <div className='card'>UI/UX Designing</div>
          <div className='card'>Brand Identity</div>
          <div className='card'>ECommerce</div>
        </div>
        <div className='group'>
          <div aria-hidden className='card'>Web Development</div>
          <div aria-hidden className='card'>UI/UX Designing</div>
          <div aria-hidden className='card'>Brand Identity</div>
          <div aria-hidden className='card'>ECommerce</div>
        </div>
      
      </div>

    </div>
  )
}

export default App;
