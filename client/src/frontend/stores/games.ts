import {defineStore} from 'pinia';
import {ref} from "vue";
import {Game} from "../models/Game";
import axios from "axios";
import {Constants} from "../constants/Constants";

export const useGamesStore = defineStore('games', () => {
    const games = ref<Game[]>([]);

    async function fetchGames() {
        const response = await axios.get(Constants.API_URL);
        games.value = await response.data;
    }

    return {games, fetchGames};
});