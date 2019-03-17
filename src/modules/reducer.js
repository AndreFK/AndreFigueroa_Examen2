import ACTIONS from "./action";
import _ from "lodash";

const defaultState = {
  items: [
    {id:0, description: "Estos"},
    {id:1, description: "Son"},
    {id:2, description: "Ejemplos"},
    {id:3, description: "De"},
    {id:4, description: "Varios"},
    {id:5, description: "Project"},
    {id:6, description: "Code"},
    {id:7, description: "Names"},
    {id:8, description: "Para"},
    {id:9, description: "Listar"},
  ]
};

const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.CREATE_ITEM: {
      console.log(action);

      let item = action.payload;
      let newItem = { id: state.items.length + 1, description: item };
      let newState = _.cloneDeep(state);
      newState.items.push(newItem);
      return newState;
    }

    case ACTIONS.Types.DELETE_ITEM: {
      let newState = _.cloneDeep(state);
      console.log(action.payload);
      let index = _.findIndex(newState.items, { id: action.payload });
      newState.items.splice(index, 1);
      return newState;
    }

    default:
      return state;
  }
};

export default todoReducer;