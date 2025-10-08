import {Ref, ref} from "vue";
import {defineStore} from "pinia";
import {GameStates} from "../enums/GameStates";

export const useGamesFilterStore = defineStore('gamesFilter', () => {
    const selectedFilter: Ref<string> = ref<string>(GameStates.All);

    function setSelectedFilter(filter: string): void {
        selectedFilter.value = filter;
    }

    function getSelectedFilter(): string {
        return selectedFilter.value;
    }

    return {selectedFilter, setSelectedFilter, getSelectedFilter};
});