import { combineReducers } from "redux";

import requestsPageReducer from './requests-page'
import companiesPageReducer from './companies-page'
import existRequestPageReducer from './exist-request-page'
import newRequestPageReducer from './new-request-page'

const rootReducer = combineReducers({
    requestsPage: requestsPageReducer,
    companiesPage: companiesPageReducer,
    existRequestPage: existRequestPageReducer,
    newRequestPage: newRequestPageReducer
});

export default rootReducer;