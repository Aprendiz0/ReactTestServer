import { bindActionCreators } from 'redux';
let Utils = {
    loadPage: {
        hide: () => $("#loadPage").hide(),
        show: () => $("#loadPage").show(),
    },
    modal: {
        error: (tittle, desc, resText) => {
            $('#modalerror .modalTittle').html(tittle);
            $('#modalerror .modalDesc').html(desc + resText);
            $('#modalerror').modal('open');
        },
        errorFunc: (jqXHR, status) => {
            Utils.modal.error(jqXHR.status, jqXHR.statusText, jqXHR.responseText);
            console.warn(`Error: ${jqXHR.status}, ${jqXHR.responseText}`);
        },
        errorFuncCallback: (callback) => {
            if (callback) callback();
            return Utils.modal.errorFunc;
        }
    },
    toast: (msg) => {
        M.toast({ html: msg, classes: "rounded" });
    },
    cloneJSON: (json) => {
        return JSON.parse(JSON.stringify(json));
    },
    bindMapDispatchToProps: (actions) => {
        return (dispatch) => bindActionCreators(actions, dispatch);
    }
}

export default Utils;