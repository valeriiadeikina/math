import GameSavingLoader from './GameSavingLoader.js';

GameSavingLoader.load().then((saving) => {
  console.log(saving); 
}).catch((error) => {
  console.error('Ошибка при загрузке сохранений:', error);
});