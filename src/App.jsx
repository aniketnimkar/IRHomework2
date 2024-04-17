import './App.css'
import Header from './components/Header'
import Footer  from './components/Footer'

export default function App() {
  return (
    <>
    <Header/>
    <main>
       <div className='ps-5 py-3'>
          <h1>Overview</h1>
          <img src= "https://upload.wikimedia.org/wikipedia/commons/e/ef/Virat_Kohli_during_the_India_vs_Aus_4th_Test_match_at_Narendra_Modi_Stadium_on_09_March_2023.jpg" className='rounded img-fluid'/>
      <p className="mt-3">Virat Kohli, born on November 5, 1988, in Delhi, India, is one of the world's leading cricketers. He is known for his aggressive batting and strong leadership as the captain of the Indian cricket team.</p>
      <p>Kohli has consistently ranked among the world's top batsmen and has recieved numerous awards and accolades for his remarkable cricketing skills.</p>
       </div>
    </main>
      <Footer/>
    </>
  )
}
