const ActionTypes = {
    // Order 左側 Action
    CHANGE_EVENT: 'CHANGE_EVENT',
    LOAD_CATEGORIES_SUCCESS: 'LOAD_CATEGORIES_SUCCESS',
    LOAD_ITEMS_SUCCESS: 'LOAD_ITEMS_SUCCESS',
    LOAD_TABLES_SUCCESS: 'LOAD_TABLES_SUCCESS',
    CHANGE_SELECTED_CATEGORY: 'CHANGE_SELECTED_CATEGORY',
    GET_MENU_PAGES_COUNT: 'GET_MENU_PAGES_COUNT',
    CHANGE_CURRENT_MENU_PAGE: 'CHANGE_CURRENT_MENU_PAGE',
    ADD_ITEM_TO_ORDER: 'ADD_ITEM_TO_ORDER',
    // Order 右側 Action
    REMOVE_ITEM_FROM_ORDER: 'REMOVE_ITEM_FROM_ORDER',
    ADD_ADDITION_TO_ORDER: 'ADD_ADDITION_TO_ORDER',
    REMOVE_ITEM_FROM_ADDITION: 'REMOVE_ITEM_FROM_ADDITION',
    UPADTE_ADDITION_ITEM: 'UPADTE_ADDITION_ITEM',
    TOGGLE_TOGO_STATUS: 'TOGGLE_TOGO_STATUS',
    TOGGLE_WHEN_STATUS: 'TOGGLE_WHEN_STATUS',
    CLEAR_ORDER_AND_ADDITION: 'CLEAR_ORDER_AND_ADDITION',
};

export default ActionTypes;
