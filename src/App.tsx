import Navbar from './components/navbar/navbar'

function App() {
  return (
    <>
      <Navbar />

      <section className="container mt-5">
        <div className="p-5 bg-light rounded shadow-sm text-center">
          <h1 className="fw-bold">Welcome to My Website</h1>
          <p className="lead">
            This is a simple React project using Bootstrap and custom SCSS.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </section>
    </>
  )
}

export default App