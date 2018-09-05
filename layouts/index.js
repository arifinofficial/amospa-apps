import Head from '../components/Head'
import Header from '../components/Header'
import Content from '../components/Content'
import Footer from '../components/Footer'
import {Container} from 'reactstrap'

export default () => {
  return (
    <div>
      <Head title="Amo Spa A.P.I" description="Amo Spa A.P.I Test" />
      <Container>
        <Header />
        <Content />
        <Footer copy="2018" author="Webfeat Team" />
      </Container>    
    </div>
  )
}