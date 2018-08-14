import { pillarsRef } from "../config/firebase";
import { FETCH_PILLARS } from "./types";

export const addPillar = newPillar => async dispatch => {
	pillarsRef.push().set(newPillar);
};

export const removePillar = deadPillar => async dispatch => {
	pillarsRef.child(deadPillar).remove();
};

export const fetchPillars = () => async dispatch => {
	console.log("hi");
	pillarsRef.once("value").then(snapshot => {
		console.log("asdf");
		dispatch({
			type: FETCH_PILLARS,
			payload: snapshot.toJSON()
		});
	});
};