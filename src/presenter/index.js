import teams from "../use-cases/teams";
import persistenceAPI from "../use-cases/persistenceAPI";
import nanoid from "nanoid";

const { getPlayerList, addAll } = persistenceAPI();

const {
  updatePlayerList,
  convertEmailsToListOfNames,
  convertListToObject,
  shuffle
} = teams({ getPlayerList, idGerator: nanoid });

export default {
  convertListToObject,
  shuffle,
  addAll,
  updatePlayerList,
  getStringEmailConvertListNames(names) {
    return convertEmailsToListOfNames(names);
  },
  getPlayerList() {
    return getPlayerList();
  },
  getAll(target) {
    return document.querySelectorAll(target);
  },
  get(target) {
    return document.querySelector(target);
  }
};