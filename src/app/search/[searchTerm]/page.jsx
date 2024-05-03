import Results from "@/components/Results";

export default async function SearchPage({ params }) {
  const seachTerm = params.searchTerm;
  async function fetchData() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${seachTerm}&language=en-US&page=1&include_adult=false`
      );
      const data = await res.json();
      return data.results;
    } catch (error) {
      console.log(error.message);
    }
  }

  const results = await fetchData();
  return (
    <div>
      {results &&
        results.length ===
        <h1 className="text-center pt-6">No results found</h1>}
      {results && <Results results={results} />}
    </div>
  );
}
