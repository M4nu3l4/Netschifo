import Dropdown from 'react-bootstrap/Dropdown';

import Image from 'react-bootstrap/Image';

function MyLogin() {
  return (
    <Dropdown align="end">
      <Dropdown.Toggle
        variant="outline-dark"
        id="dropdown-avatar"
        className="d-flex align-items-center m-2"
      >
        <Image
          src="/avatar.png"
          alt="User Avatar"
          roundedCircle
          style={{ width: '35px', height: '35px', objectFit: 'cover' }}
        />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#">Account</Dropdown.Item>
        <Dropdown.Item href="#">Saves</Dropdown.Item>
        <Dropdown.Item href="#">Recently viewed</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#">Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default MyLogin;
