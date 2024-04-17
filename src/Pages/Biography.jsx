import Header from "../components/Header"
import Footer from "../components/Footer"

const Biography = () =>{
  return(
    <>
      <Header/>
        <main className="ms-5">
          <h1 className="display-3 py-3">Biography</h1>
          <p className="">Virat Kohli was born on November 5, 1988, in Delhi, India. He made his debut for the Indian cricket team in August 2008 and quickly established himself as a prolific run-scorer. Known for his aggressive batting stle and strong leadership, he has set numerous records and achieved great success as the captain of the Indian cricket team.</p>
          <p className="">Discover more about his life, career, and journey in this biography section.</p>
        </main>
      <Footer/>
    </>
  )
}

export default Biography;
