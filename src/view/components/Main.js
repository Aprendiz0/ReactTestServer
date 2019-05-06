import React from "react";
import { connect } from 'react-redux';

class Main extends React.Component {

    render() {
        const { mainPage } = this.props;

        return (
            <>
                <main style={{ height: '100%' }}>
                    <div className="container">
                        <div className="row" style={styles.mainRow}>
                            {mainPage}
                        </div>
                    </div>
                </main>
            </>
        );
    }
}

const styles = {
    mainRow: {
        marginTop: '1.3rem',
        marginBottom: '80px'
    }
}

const mapStateToProps = (state) => ({
    ...state,
    mainPage: state.mainPageState.mainPage
});

export default connect(mapStateToProps)(Main);