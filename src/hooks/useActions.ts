import { allActionCreators } from './../store/reducers/action-crators';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';


export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(allActionCreators, dispatch)
}