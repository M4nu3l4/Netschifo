import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


function MyLogin(){
    return(
        <InputGroup className="mb-3">
        <Form.Control aria-label="Text input with dropdown button" />

        <DropdownButton src ="../../public/./avatar.png" className="rounded"
          variant="outline-secondary"
          title="Dropdown"
          id="input-group-dropdown-2"
          align="end"
        >
          <Dropdown.Item href="#">Account</Dropdown.Item>
          <Dropdown.Item href="#">Saves</Dropdown.Item>
          <Dropdown.Item href="#">Recently viewed</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Logout</Dropdown.Item>
        </DropdownButton>
      </InputGroup>
    )
}
export default MyLogin