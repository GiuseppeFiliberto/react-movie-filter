import { useState, useEffect } from 'react'

const data = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
];

function App() {

  const [films, setFilms] = useState(data);
  const [genre, setGenre] = useState('');
  const [filteredFilms, setFilteredFilms] = useState(films);
  const [search, setSearch] = useState('');

  useEffect(() => {

    console.log("Changed genre!", genre);
    setFilteredFilms(films.filter(film => (film.genre.toLowerCase() === genre.toLowerCase() || genre === '') && (film.title.toLowerCase().includes(search.toLowerCase()))));
  }, [genre, search, films]);

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
                name="genre"
                id=""
                onChange={(e) => setGenre(e.target.value
                )}
              >
                <option selected>Select one</option>
                <option value="Thriller">Thriller</option>
                <option value="Fantascienza">Fantascienza</option>
                <option value="Romantio">Romantico</option>
                <option value="Azione">Azione</option>

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
                value={search}
                onChange={(e) => setSearch(e.target.value)}
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
