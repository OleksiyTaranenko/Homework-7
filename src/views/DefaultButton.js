import React from 'react';
import PropTypes from 'prop-types';

function DefaultButton({ title, click }) {
    return (
        <div>
            <button onClick={click}>{title}</button>
        </div>
    )
}

DefaultButton.propTypes = {
    title: PropTypes.string,
    click: PropTypes.func
};

export default DefaultButton;