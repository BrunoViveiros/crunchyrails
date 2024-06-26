import { Anime } from '@/domain/Anime';
import { listTopAnimes } from '@/infra/sdk/listTopAnimes';
import { get } from 'lodash';

export const getTopAnimes = async () => {
  const response = await listTopAnimes();

  const jikanTopAnimesList = response.data.data;

  const animeList: Array<Anime> = jikanTopAnimesList.map((anime) => ({
    id: String(anime.mal_id),
    name: anime.title,
    image: get(anime, 'images.jpg.image_url', ''),
    smallImage: get(anime, 'images.jpg.small_image_url', ''),
  }));

  return animeList;
};
