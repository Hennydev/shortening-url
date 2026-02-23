export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }
    const { url } = req.body;
    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }

    try{
        const formData = new URLSearchParams();
        formData.append('url', url);
        const response = await fetch("https://cleanuri.com/api/v1/shorten", {
          method: "POST",
          body: formData,
        });
        const data = await response.json();
        if (!data.result_url) {
            return res.status(400).json({ error: 'Failed to shorten URL' });
        }
       return  res.status(200).json({ shortUrl: data.result_url});
    }catch (error) {
        console.error('Error shortening URL:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}