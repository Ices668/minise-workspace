let snackbarStore = null;

const SnackMessageType = {
    SUCCESS: 'success',
    ERROR: 'error',
    WARNING: 'warning',
    INFO: 'info'
}

const setSnackbarStore = (store) => {
    snackbarStore = store;
}

const showSuccess = (title, text) => {
    snackbarStore?.showMessage(SnackMessageType.SUCCESS, title, text);
}

const showInfo = (title, text) => {
    snackbarStore?.showMessage(SnackMessageType.INFO, title, text);
}

const showWarning = (title, text) => {
    snackbarStore?.showMessage(SnackMessageType.WARNING, title, text);
}

const showError = (title, text) => {
    snackbarStore?.showMessage(SnackMessageType.ERROR, title, text);
}

export {
    SnackMessageType,
    setSnackbarStore,
    showSuccess,
    showInfo,
    showWarning,
    showError
}
