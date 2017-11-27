 export default function(state=[],action){
 	let newS
 	switch(action.type){
 		case '1':
 			newS = [..state]
 			//数据处理
 			return newS;
 		default:
 			return state;

 	}
 }