import { useState } from 'react'


function App() {


  return (
    <>
      <header className='bg-primary py-3'>
        <div className='container'>
          <h1 className='fw-bold text-warning text-center'>BOOL-BUSTER</h1>
        </div>
      </header>

      <div className="container">
        <div className="row mt-5">
          <div className="col-3">
            <div class="mb-3">
              <label for="" class="form-label">Genre</label>
              <select
                class="form-select"
                name=""
                id=""
              >
                <option selected>Select one</option>
                <option value="">Thriller</option>
                <option value="">Fantascienza</option>
                <option value="">Romantico</option>
                <option value="">Azione</option>

              </select>
            </div>
          </div>

          <div className="col-9">
            <div class="mb-3">
              <label for="" class="form-label">Search</label>

              <input
                type="text"
                class="form-control"
                name="Searcher"
                id=""
                aria-describedby="helpId"
                placeholder="Search a movie by title"
              />

            </div>

          </div>


        </div>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div class="card text-start">
              <img class="card-img-top" src="holder.js/100px180/" alt="Title" />
              <div class="card-body">
                <h4 class="card-title">Title</h4>
                <p class="card-text">Genre</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default App
