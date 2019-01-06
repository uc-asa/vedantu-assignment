import axios from 'axios';

export const DATA_AVAILABLE = 'DATA_AVAILABLE';

export function getData(){
    return (dispatch) => {

    	// Calling API
    	const url = 'https://api.github.com/users/supreetsingh247/repos';
 		axios.get(url)
			.then(function (response) {
            	dispatch({type: DATA_AVAILABLE, data:response.data});
			})
			.catch(function (error) {
			console.log(error);
		});
    };
}
