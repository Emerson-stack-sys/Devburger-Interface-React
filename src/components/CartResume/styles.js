import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 22px;

  * {
    color: #4d4b4b;
    font-weight: 500;
  }

  .container-top {
    display: grid;
    grid-gap: 10px 50%;
    grid-template-areas:
      'title title'
      'items items-price'
      'delivey-tax delivey-tax-price';

    .title {
      grid-area: title;
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 20px;
    }

    .items {
      grid-area: items;
    }

    .items-price {
      grid-area: items-price;
    }

    .delivery-tax {
      grid-area: delivery-tax;
    }

    .delivey-tax-price {
      grid-area: delivey-tax-price;
    }
  }
`;
