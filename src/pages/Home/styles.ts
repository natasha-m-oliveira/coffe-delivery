import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 6.75rem;
  margin: 6rem 0;
`

export const IntroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 3.5rem;

  .description {
    display: flex;
    flex-direction: column;
    gap: 4.5rem;
    flex: 1;

    @media (max-width: 425px) {
      h1 {
        font-size: 2rem;
      }
    }
  }

  .items {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 1.25rem;
    column-gap: 2.5rem;

    @media (max-width: 425px) {
      grid-template-columns: 1fr;
    }
  }

  .image img {
    display: block;
    max-width: 100%;
  }
`

export const CoffeeListContainer = styled.div`
  display: grid;
  flex-direction: column;
  gap: 3.5rem;

  .list {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem;
  }
`
