// types of action
const Types = {
    CREATE_ITEM: "CREATE_ITEM",
    DELETE_ITEM: "DELETE_ITEM",
    GET_DATE:"GET_DATE"
  };
  // actions
  const createItem = task => ({
    type: Types.CREATE_ITEM,
    payload: task
  });
  
  const deleteItem = id => ({
    type: Types.DELETE_ITEM,
    payload: id
  });

  const getDate = (month, day) => ({
    type: Types.GET_DATE,
    payload : (month, day)
  });
  
  export default {
    createItem,
    deleteItem,
    getDate,
    Types
  };