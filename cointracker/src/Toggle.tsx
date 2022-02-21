import styled from "styled-components";
import Switch from "react-switch";
import { useRecoilState } from "recoil";
import { isDarkAtom } from "./atoms";

const ToggleWrapper = styled.div`
  margin-top: 15px;
`;

const ToggleLabel = styled.label``;

function Toggle() {
  // 다크모드 state. 스위치의 checked와 연결하여 페이지가 바뀌어도 속성이 변경되지 않게 함.
  const [theme, setTheme] = useRecoilState(isDarkAtom);
  function onChangeHandler() {
    setTheme((prev) => !prev);
  }
  return (
    <ToggleWrapper>
      <ToggleLabel>
        <Switch
          onChange={onChangeHandler}
          checked={theme}
          onColor="#171B20"
          checkedIcon={false}
          uncheckedIcon={false}
        />
      </ToggleLabel>
    </ToggleWrapper>
  );
}

export default Toggle;
