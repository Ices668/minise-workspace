let errorHandler;
let logoutCallback;

const setErrorHandler = (handler) => {
    errorHandler = handler;
};

const setLogoutCallback = (callback) => {
    logoutCallback = callback;
};

const getToken = () => localStorage.getItem('auth_token');

const stringifyQuery = (obj) => {
    const pairs = [];

    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            let value = obj[key];

            if (!value && (value === null || value === undefined || isNaN(value))) {
                value = '';
            }

            key = encodeURIComponent(key);
            value = encodeURIComponent(value);

            if (key === null || value === null) continue;
            pairs.push(`${key}=${value}`);
        }
    }

    if (pairs.length < 1) {
        return '';
    }

    return `?${pairs.join('&')}`;
};

const buildHeaders = ({ hasBody = false, extra = {} } = {}) => {
    const headers = { ...extra };
    if (hasBody) {
        headers['Content-Type'] = 'application/json';
    }
    const token = getToken();
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }
    return headers;
};

const parseResponse = async (res) => {
    const contentType = res.headers.get('content-type') || '';

    if (!contentType.includes('application/json')) {
        return null;
    }

    return res.json();
};

const buildError = (res, payload) => {
    const message =
        payload?.message ||
        payload?.error?.message ||
        `Request failed with status ${res.status}`;

    const error = new Error(message);
    error.status = res.status;
    error.payload = payload;
    return error;
};

const callApi = async (url, method, data = {}) => {
    try {
        const hasBody = method === 'POST' || method === 'PUT';
        const requestUrl = hasBody ? url : `${url}${stringifyQuery(data)}`;
        const response = await fetch(requestUrl, {
            method,
            headers: buildHeaders({ hasBody }),
            body: hasBody ? JSON.stringify(data) : undefined,
        });

        if (response.status === 401) {
            localStorage.removeItem('auth_token');
            localStorage.removeItem('auth_user');
            if (logoutCallback) {
                logoutCallback();
            }
        }

        if (errorHandler && response.status >= 400) {
            errorHandler(response.status);
        }

        const payload = await parseResponse(response);

        if (!response.ok) {
            throw buildError(response, payload);
        }

        return payload;
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }

        throw new Error('Request failed');
    }
};

export { setErrorHandler, setLogoutCallback };

export default callApi;
