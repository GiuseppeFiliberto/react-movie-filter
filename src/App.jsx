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

      <div className="container rounded border border-2 mt-5 shadow">
        <div className="row p-2">
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
                <option selected disabled>Select one</option>
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

        <div className="row row-cols-1 row-cols-md-3 g-4  pb-5 mb-5">
          {filteredFilms.map(film => (
            <div className="col" key={film}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{film.title}</h5>
                  <p className="card-text">{film.genre}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>



    </>
  )
}

export default App
