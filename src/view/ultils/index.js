module.exports = {
    loadPage: {
        hide: () => $("#loadPage").hide(),
        show: () => $("#loadPage").show(),
    },
    modal: {
        error: (tittle, desc) => {
            $('#modalerror .modalTittle').html(tittle);
            $('#modalerror .modalDesc').html(desc);
            $('#modalerror').modal('open');
        }
    }
}