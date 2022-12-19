import s from './style.styled';
import Button from './Button';

const ListItem = ({ id, name, number, onClick }) => {
    return (
        <li>
            <s.Label>
                {name}: {number}
            </s.Label>
            <Button name="delete" onClick={onClick} id={id} />
        </li>
    );
};

export default ListItem;
