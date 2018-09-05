import { injectGlobal } from 'styled-components'

injectGlobal`
  body { background-color: #f6F6F6 !important }
  .close { line-height: 0.8 }
  .content {
    margin-top: 1.5rem;
    padding: 30px;
    background-color: #FFF
  }
  .content h1 {
    margin: 0 0 1.5rem;
    padding: 0.8rem 1.5rem;
    font-size: 16px;
    color: #0c5460;
    background-color: #D1ECF1;
  }
  .bottom {
    margin-top: 1.5rem;
    padding: 1rem 30px;
    color: #FFF;
    background-color: #17a2b8
  }
  .close { line-height: 0.8 }
  .navbar-light {
    margin-top: 30px
  }
  .navbar-light .navbar-nav .nav-link {color: white }
  .navbar-light .navbar-nav .nav-link:hover {color: white }
  .navbar-light .navbar-nav .nav-link:focus {color: white }
  .navbar-light .navbar-nav .dropdown-menu .nav-link:hover {color: black }
  .navbar-light .navbar-nav .dropdown-menu .nav-link:focus {color: black }
`