import PropTypes from 'prop-types';
import ListItem from './ListItem';

const ContactList = ({ contactList, onClick }) => {
    return (
        <ul>
            {contactList.map(el => {
                return (
                    <ListItem
                        key={el.id}
                        name={el.name}
                        number={el.number}
                        onClick={onClick}
                        id={el.id}
                    />
                );
            })}
        </ul>
    );
};

export default ContactList;

ContactList.propTypes = {
    contactList: PropTypes.array.isRequired,
    onClick: PropTypes.func,
};
