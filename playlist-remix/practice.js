const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128
    }
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124
    }
  ]
];

// 1. 扁平化播放清單並加入 source 屬性
function flattenPlaylists(playlists) {
  if (!Array.isArray(playlists)) {
    return [];
  }

  const result = [];

  playlists.forEach((playlist, playlistIndex) => {
    if (Array.isArray(playlist)) {
      playlist.forEach((track, trackIndex) => {
        result.push({
          ...track,
          source: [playlistIndex, trackIndex]
        });
      });
    }
  });

  return result;
}

// 2. 為每首曲目計算分數並加入 score 屬性
function scoreTracks(tracks) {
  return tracks.map(track => {
    const score = track.votes * 10 - Math.abs(track.bpm - 120);
    return {
      ...track,
      score
    };
  });
}

// 3. 去除重複的 trackId，只保留第一次出現的項目
function dedupeTracks(tracks) {
  const seenIds = new Set();
  const result = [];

  for (const track of tracks) {
    if (!seenIds.has(track.trackId)) {
      seenIds.add(track.trackId);
      result.push(track);
    }
  }

  return result;
}

// 4. 限制同一位歌手出現的最大次數，保留最早出現的曲目
function enforceArtistQuota(tracks, maxPerArtist) {
  const artistCounts = {};
  const result = [];

  for (const track of tracks) {
    const currentCount = artistCounts[track.artist] || 0;
    if (currentCount < maxPerArtist) {
      artistCounts[track.artist] = currentCount + 1;
      result.push(track);
    }
  }

  return result;
}

// 5. 建立播放排程，將曲目轉換為 { slot, trackId } 物件格式
function buildSchedule(tracks) {
  return tracks.map((track, index) => ({
    slot: index + 1,
    trackId: track.trackId
  }));
}

// 6. 主函式：依序呼叫上述輔助函式產生最終播放排程
function remixPlaylist(playlists, maxPerArtist) {
  const flattened = flattenPlaylists(playlists);
  const scored = scoreTracks(flattened);
  const deduped = dedupeTracks(scored);
  const quotaEnforced = enforceArtistQuota(deduped, maxPerArtist);
  return buildSchedule(quotaEnforced);
}

// 測試：
// flattenPlaylists：非陣列 → []
console.log(flattenPlaylists("not an array")); // []
console.log(flattenPlaylists(null));           // []

// flattenPlaylists：每首曲目應含 source [播放清單索引, 曲目索引]
const flat = flattenPlaylists(playlists);
console.log(flat.length);                      // 5
console.log(flat[0].source, flat[4].source);   // [0, 0] [1, 1]

// scoreTracks：score = votes*10 - |bpm-120|
const scored = scoreTracks(flat);
console.log(scored[0].score); // 5*10 - |122-120| = 50 - 2 = 48
console.log(scored[2].score); // 4*10 - |128-120| = 40 - 8 = 32

// dedupeTracks：加一筆重複 trackId 驗證只留第一次
const withDup = scoreTracks(flattenPlaylists([...playlists, [{ trackId: "trk101", artist: "X", title: "Dup", votes: 1, bpm: 120 }]]));
console.log(withDup.length, dedupeTracks(withDup).length); // 6 5（trk101 重複被移除一筆）

// enforceArtistQuota：Velvet Comet 出現 2 次，限 1 次應剩 1
const deduped = dedupeTracks(scored);
const quota1 = enforceArtistQuota(deduped, 1);
console.log(quota1.filter(t => t.artist === "Velvet Comet").length); // 1

// buildSchedule：{ slot(從1起), trackId }
console.log(buildSchedule(quota1));

// remixPlaylist：整條 pipeline
console.log(remixPlaylist(playlists, 1));
console.log(remixPlaylist(playlists, 2));
