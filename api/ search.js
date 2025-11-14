export default async function handler(req, res) {
  const query = req.query.q;

  if (!query) {
    return res.status(400).json({ error: "Missing search query" });
  }

  try {
    // Chamada da sua IA (Video Shopper AI)
    const response = await fetch("https://video-shopper-ai.vercel.app/api/search?q=" + encodeURIComponent(query));

    const data = await response.json();

    res.status(200).json({
      results: data.results || [],
    });
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar avaliações" });
  }
}
