import { IcLeftSmall } from './assets/icons';

function App() {
  return (
    <St.Wrapper>
      <IcLeftSmall />
      Assemble 선영 현지 효승
    </St.Wrapper>
  );
}

export default App;

const St = {
  Wrapper: styled.article`
    background-color: ${({ theme }) => theme.colors.White};
    color: ${({ theme }) => theme.colors.Grey500};
    ${({ theme }) => theme.fonts.Title3};
  `,
};
