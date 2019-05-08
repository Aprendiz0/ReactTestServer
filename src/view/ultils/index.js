module.exports = {
    loadPage: {
        hide: () => $("#loadPage").hide(),
        show: () => $("#loadPage").show(),
    },
    modal: {
        error: (tittle, desc, resText) => {
            $('#modalerror .modalTittle').html(tittle);
            $('#modalerror .modalDesc').html(desc + resText);
            $('#modalerror').modal('open');
        }
    }
}