import { Anime } from '@/domain/Anime';
import { listTopAnimes } from '@/infra/sdk/listTopAnimes';

export const getTopAnimes = async () => {
  const response = await listTopAnimes();

  const jikanTopAnimesList = response.data.data;

  const animeList: Array<Anime> = jikanTopAnimesList.map((anime) => ({
    id: String(anime.mal_id),
    name: anime.title,
  }));

  return animeList;
};
