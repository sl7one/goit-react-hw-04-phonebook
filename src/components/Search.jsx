import PropTypes from 'prop-types';
import s from './style.styled';
import { nanoid } from 'nanoid';

const Search = ({ label, type, name, pattern, title, onChange, value }) => {
    const id = nanoid();
    return (
        <>
            <s.Label htmlFor={id}>{label}</s.Label>
            <s.Input
                value={value}
                id={id}
                type={type}
                name={name}
                pattern={pattern}
                required
                onChange={onChange}
                title={title}
            ></s.Input>
        </>
    );
};

export default Search;

Search.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    name: PropTypes.string,
    pattern: PropTypes.string,
    title: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
};
