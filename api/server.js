import { HTTPS, sunfoxApiClient } from "./constant";
import { SET_LOADING, SET_STRINGS_OBJ } from "../redux/types";
import { handleError } from "./handleError";

export const getinstallSizeRecommender = (dispatch, data) =>
	new Promise((resolve, reject) => {
		dispatch({
			type: SET_LOADING,
			payload: true,
		});
		HTTPS.get(`/recommendation/installation/size`, {
			params: data,
		})
			.then((res) => {
				dispatch({
					type: SET_LOADING,
					payload: false,
				});
				resolve(res.data);
			})
			.catch((err) => {
				dispatch({
					type: SET_LOADING,
					payload: false,
				});
				reject(handleError(err));
			});
	});

export const getinstallCostRecommender = (dispatch, data) =>
	new Promise((resolve, reject) => {
		dispatch({
			type: SET_LOADING,
			payload: true,
		});
		HTTPS.get(`/recommendation/installation/total_cost`, {
			params: data,
		})
			.then((res) => {
				dispatch({
					type: SET_LOADING,
					payload: false,
				});
				resolve(res.data);
			})
			.catch((err) => {
				dispatch({
					type: SET_LOADING,
					payload: false,
				});
				reject(handleError(err));
			});
	});


export const createModel = (dispatch) =>
    new Promise((resolve, reject) => {
        dispatch({
            type: SET_LOADING,
            payload: true,
        });
	sunfoxApiClient.post(`/models`, null, {})
            .then((res) => {
		console.log(res)
                dispatch({
                    type: SET_LOADING,
                    payload: false,
                });
                resolve(res.data.id);
            })
            .catch((err) => {
                dispatch({
                    type: SET_LOADING,
                    payload: false,
                });
                reject(handleError(err));
            });
    });	

export const updateModel = (dispatch, id, data) =>
    new Promise((resolve, reject) => {
        dispatch({
            type: SET_LOADING,
            payload: true,
        });
	
	sunfoxApiClient.patch(`/models/` + id + '/update', data)
            .then((res) => {
		console.log(res)
                dispatch({
                    type: SET_LOADING,
                    payload: false,
                });
                resolve(res);
            })
            .catch((err) => {
                dispatch({
                    type: SET_LOADING,
                    payload: false,
                });
                reject(handleError(err));
            });
    });



export const generateModel = (dispatch, data) =>
    new Promise((resolve, reject) => {
        dispatch({
            type: SET_LOADING,
            payload: true,
        });
        HTTPS.post(`/model`, null, {
            params: data,
        })
            .then((res) => {
                dispatch({
                    type: SET_LOADING,
                    payload: false,
                });
                resolve(res.data);
            })
            .catch((err) => {
                dispatch({
                    type: SET_LOADING,
                    payload: false,
                });
                reject(handleError(err));
            });
    });
	


export const updateBill = (dispatch, model_id, cost_array) =>
    new Promise((resolve, reject) => {
        dispatch({
            type: SET_LOADING,
            payload: true,
        });
        sunfoxApiClient.post(`/bill`, null, {
		params: {model_id: model_id,
			 bill_data: cost_array}
	})
            .then((res) => {
                dispatch({
                    type: SET_LOADING,
                    payload: false,
                });
		resolve(res.data)
            })
            .catch((err) => {
		console.log(err)
                dispatch({
                    type: SET_LOADING,
                    payload: false,
                });
                reject(handleError(err));
            });
    });


export const signupEmailList = (dispatch, data) =>
	new Promise((resolve, reject) => {
		dispatch({
			type: SET_LOADING,
			payload: true,
		});
		sunfoxApiClient
			.post(`/mailing_list`, data)
			.then((res) => {
				console.log("res : ", res.data);
				dispatch({
					type: SET_LOADING,
					payload: false,
				});
				resolve(res.data);
			})
			.catch((err) => {
				console.log("Err : ", err);
				dispatch({
					type: SET_LOADING,
					payload: false,
				});
				reject(handleError(err));
			});
	});



export const getStringsForAdId = (dispatch, adId) =>
    new Promise((resolve, reject) => {
        dispatch({
            type: SET_LOADING,
            payload: true,
        });
    sunfoxApiClient.get('/strings', {params:{ad_group_id: adId}})
            .then((res) => {
                    console.log(res)
                    dispatch({
                        type: SET_LOADING,
                        payload: false,
                    });
                    dispatch({
                        type: SET_STRINGS_OBJ,
                        payload: res.data,
                    });
                resolve(res.data);
            })
            .catch((err) => {
                dispatch({
                    type: SET_LOADING,
                    payload: false,
                });
                reject(handleError(err));
            });
    });	
