import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import { Filter } from '../components/todo/Filter';

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  };
};

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter as any);

export default FilterLink;
