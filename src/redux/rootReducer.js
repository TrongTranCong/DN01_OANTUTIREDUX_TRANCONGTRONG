
import { combineReducers,createStore } from "redux";
import { BTGameOanTuTiReducer } from "./BTGameOanTuTiReducer";


//store tổng ứng dụng
const rootReducer = combineReducers({
    //nơi sẽ chứa các reducer cho từng nghiệp vụ(store con)
    BTGameOanTuTiReducer,
});

export const store = createStore(rootReducer);