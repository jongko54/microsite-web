import styled from "styled-components";
import prev from '../../assets/img/prevIcon.png';
import next from '../../assets/img/nextIcon.png';

function Pagination({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit);
  return (
    <>
      <Nav>
        <Button 
          onClick={() => setPage(page - 1)} 
          disabled={page === 1}
          className='icon prev'
        />
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <Button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? "page" : null}
            >
              {i + 1}
            </Button>
          ))}
        <Button 
          onClick={() => setPage(page + 1)} 
          disabled={page === numPages} 
          className='icon next'
        />
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 16px;
  padding: 6% 0 0 0;
`;

const Button = styled.button`
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 200;
  color: #BABABA;


  &[disabled] {
    
  }

  &[aria-current] {
    color: #393939;
    font-weight: 300;
  }
  &.icon {
    width: 30px;
    height: 30px;
    background-repeat: no-repeat;

    background-position: center center;
  }
  &.icon.prev {
    background-image: url(${prev});
  }
  &.icon.next {
    background-image: url(${next});
  }
`;

export default Pagination;