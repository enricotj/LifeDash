import { pillarsRef } from "../config/firebase";
import { FETCH_PILLARS } from "./types";

export const addPillar = newPillar => async dispatch => {
	pillarsRef.add(newPillar).then(ref => {
		console.log('Added document with ID: ', ref.id);
	});
};

export const removePillar = deadPillarId => async dispatch => {
	console.log('asdfasdf');
	console.log(deadPillarId);
	pillarsRef.doc(deadPillarId).delete().then(ref => {
		console.log('Deleted document with ID: ', deadPillarId);
	});;
};

export const fetchPillars = () => async dispatch => {
	pillarsRef.get()
	.then(snapshot => {
		var pillars = [];
		snapshot.forEach(doc => {
			console.log(doc.id, '=>', doc.data());
			pillars.push({id:doc.id, data: doc.data()});
		});
		dispatch({
			type: FETCH_PILLARS,
			payload: pillars
		});
	})
	.catch(err => {
      console.log('Error getting documents', err);
    });
};