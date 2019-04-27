import React from "react";
import { connect } from 'react-redux';

class Main extends React.Component {

    render() {
        const { mainPage } = this.props;

        return (
            <main style={{ height: '100%' }}>
                <div className="container">
                    <div id="mainRow" className="row">
                        {mainPage}
                    </div>
                </div>
            </main>
        );
    }
}

const mapStateToProps = (store) => ({
    mainPage: store.mainPageState.mainPage
});

export default connect(mapStateToProps)(Main);