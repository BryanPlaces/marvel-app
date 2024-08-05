import md5 from 'md5';
import charactersMockData from '../mocks/characters.json';
import characterMockData from '../mocks/character.json';
import comicsMockData from '../mocks/characterComics.json';

const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;
const PRIVATE_KEY = process.env.REACT_APP_PRIVATE_KEY;
const BASE_URL = 'https://gateway.marvel.com:443/v1/public';
const USE_MOCK_DATA = process.env.REACT_APP_USE_MOCK_DATA;

const getHash = () => {
  const ts = Date.now();
  const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY);
  return { ts, hash };
};

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.data.results;
  } catch (error) {
    console.error('Error fetching characters from Marvel API:', error);
    return [];
  }
};

export const searchCharacters = async (characterName = '', limit = 50) => {
  const { ts, hash } = getHash();
  const url = `${BASE_URL}/characters?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}&limit=${limit}${characterName !== '' ? `&name=${characterName}` : ''}`;

  if (USE_MOCK_DATA == true) {
    return charactersMockData.data.results;
  }

  const data = await fetchData(url);
  return data;
};

export const getCharacter = async (characterId) => {
  const { ts, hash } = getHash();
  const url = `${BASE_URL}/characters/${characterId}?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`;

  if (USE_MOCK_DATA == true) {
    return characterMockData.data.results[0];
  }

  const characterData = await fetchData(url);
  return characterData[0];
};

export const getCharacterComics = async (characterId, limit = 20) => {
  const { ts, hash } = getHash();
  const url = `${BASE_URL}/characters/${characterId}/comics?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}&limit=${limit}`;

  if (USE_MOCK_DATA == true) {
    return comicsMockData.data.results;
  }

  const data = await fetchData(url);
  return data;
};
