import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;
async function page({ searchParams }) {
  const genre = searchParams || "fetchTrending";

  async function fetchData() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3${
          genre === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`
        }?api_key=${API_KEY}&language=en-US&page=1`,
        { next: { revalidate: 10000 } }
      );

      return await res.json();
    } catch (error) {
      throw new Error("Failed to fetch data");
    }
  }

  const results = await fetchData();

  return (
    <div>
      <Results results={results.results} />
    </div>
  );
}

export default page;
