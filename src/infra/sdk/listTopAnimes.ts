import { JikanTopAnimes } from '@/infra/models/JikanTopAnimes';
import { httpClient } from './httpClient';

export const listTopAnimes = () => httpClient.get<JikanTopAnimes>('/top/anime');
