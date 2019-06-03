functions = {
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
            functions.modal.error(jqXHR.status, jqXHR.statusText, jqXHR.responseText);
            console.trace();
        },
        errorFuncCallback: (callback) => {
            if(callback) callback();
            return functions.modal.errorFunc;
        }
    },
    toast: (msg) => {
        M.toast({ html: msg, classes: "rounded" });
    },
    cloneJSON: (json) => {
        return JSON.parse(JSON.stringify(json));
    }
}

module.exports = functions;