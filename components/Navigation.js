import React from 'react'
import {
  Navbar,
  NavbarBrand,
  Nav,
  Navmenu,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle, 
  DropdownMenu,
  Media
} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

export default class extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      menuObjek: [
        {
          id: 1,
          name: "App CMS",
          url: "/",
          child: [
            { id: 1, name:"Sauna", url:"/sauna" },
            { id: 2, name:"Cafe", url:"/cafe" },
            { id: 3, name:"Hair", url:"/hair" },
            { id: 4, name:"Beauty", url:"/beauty" },
            { id: 5, name:"Body", url:"/body" }
          ]
        },
        {id: 2, name: "Video", url: "/video", child:[]},
        {id: 3, name: "Review", url: "/review", child:[]},
        {id: 4, name: "Gift", url: "/gift", child:[]},
        {id: 5, name: "Booking", url: "/booking", child:[]},
        {id: 6, name: "Gallery", url: "/gallery", child:[]},
      ]
    }
  }  

  render() {
    return (
      <Navbar color="info" light expand="md" className="rounded shadow-sm">
        <NavbarBrand href="/" className="text-light">
          <Media left className="mr-2" src="../static/icon.png"/>
          Amo Spa A.P.I
        </NavbarBrand>
        <Nav className="ml-auto" navbar> 

          {this.state.menuObjek.map((menu, i) => {

            return (

            menu.child.length != 0 ? 

              <UncontrolledDropdown key={i} nav inNavbar direction="left"> 
                <DropdownToggle nav caret>
                  {menu.name}
                </DropdownToggle>
                <DropdownMenu right>

                  {menu.child.map((subMenu, i) => {

                    return (
                      <NavLink key={i} className="dropdown-item" href={subMenu.url}>{subMenu.name}</NavLink>
                    )
                  
                  })}

                </DropdownMenu>
              </UncontrolledDropdown>

              :

              <NavLink key={i} href={menu.url}>{menu.name}</NavLink>                
              
            )
          })}
        </Nav>
      </Navbar>
    )
  }
}