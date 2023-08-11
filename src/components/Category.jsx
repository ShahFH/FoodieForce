import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks} from 'react-icons/gi';
import  styled  from 'styled-components';
import { Link } from 'react-router-dom';

function Category() {
  return (
    <List>
        <Link to={`cuisine/Italian`}>
        <FaPizzaSlice />
        <h3>Italian</h3>
        </Link>
        <Link to={`cuisine/American`}>
        <FaHamburger />
        <h3>American</h3>
        </Link>
        <Link to={`cuisine/Thai`}>
        <GiNoodles />
        <h3>Thai</h3>
        </Link>
        <Link to={`cuisine/Japanese`}>
        <GiChopsticks />
        <h3>Japanese</h3>
        </Link>

    </List>
  )
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

const Slink = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: white;
    font-size: 0.8rem;
  }

  svg {
    color: white;
    font-size: 1.5rem;
  }
  &.active {
    background: linear-gradient(to right, #f27121, e94057);

    svg {
      color: white;
    }
    h4 {
      color: white
    }
  }
`;



export default Category