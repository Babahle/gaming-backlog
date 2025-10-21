import {defineStore} from 'pinia';
import {Ref, ref} from "vue";
import {Game} from "../models/Game";
import axios from "axios";
import {Constants} from "../constants/Constants";
import {GameStates} from "../enums/GameStates";

export const useGamesStore = defineStore('games', () => {
    const games: Ref<Game[]> = ref<Game[]>([]);
    let selectedFilter = ref(GameStates.All.valueOf());


    async function fetchGames(filter: string = "All"): Promise<void> {
        if (filter && filter !== "All") {
            const response = await axios.get(`${Constants.API_URL}/state/${filter}`);
            games.value = await response.data;
            return;
        }
        const response = await axios.get(Constants.API_URL);
        games.value = await response.data;
    }

    async function setFilter(filter: string): Promise<void> {
        selectedFilter.value = filter;
        await fetchGames(filter);
    }

    async function deleteGame(gameId: string): Promise<void> {
        await axios.delete(`${Constants.API_URL}/games/${gameId}`);
        await fetchGames(selectedFilter.value);
    }

    return {games, fetchGames, setFilter, deleteGame};
});