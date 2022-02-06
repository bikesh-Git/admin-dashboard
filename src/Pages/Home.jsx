import Styled from 'styled-components'
import FeaturedInfo from '../components/FeaturedInfo';
import Chats from '../components/Chats'
import WidgetSm from '../components/WidgetSm'
import WidgetLg from '../components/WidgetLg'

const Conatainer = Styled.div`
    flex:4;
    background-color: white;
    height: calc(100vh -50px);
`
const Widgets = Styled.div`

  display: flex;
`


const Home = () => {
  return <Conatainer>
    <FeaturedInfo />
    <Chats />

    <Widgets>
      <WidgetSm />
      <WidgetLg />
    </Widgets>


  </Conatainer>
};

export default Home;
