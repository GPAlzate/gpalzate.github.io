module.exports = async function () {
    const apiKey = process.env.LASTFM_API_KEY;
    if (!apiKey) {
        console.warn('[lastfm] LASTFM_API_KEY not set — skipping fetch');
        return { recentTracks: [] };
    }

    try {
        const res = await fetch(
            `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=gabephi&limit=5&api_key=${apiKey}&format=json`
        );
        const data = await res.json();
        return {
            recentTracks: data.recenttracks.track
                .filter(t => !t['@attr']?.nowplaying)
                .map(t => ({
                    name: t.name,
                    artist: t.artist['#text'],
                    url: t.url,
                    uts: t.date.uts,
                }))
        };
    } catch (e) {
        console.error('[lastfm] fetch failed:', e.message);
        return { recentTracks: [] };
    }
};
