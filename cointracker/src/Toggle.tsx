import styled from "styled-components";
import Switch from "react-switch";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { isDarkAtom } from "./atoms";

const ToggleWrapper = styled.div`
  margin-top:15px;
`;

const ToggleLabel = styled.label`
  
`;

function Toggle() {
    const setTheme = useSetRecoilState(isDarkAtom);
    const [checked, setchecked] = useState(false);
    function onChangeHandler() {
        setchecked(!checked);
        setTheme(prev => !prev)
    }
    return(
        <ToggleWrapper>
            <ToggleLabel>
                <Switch onChange={onChangeHandler} checked={checked} onColor="#171B20" checkedIcon={false} uncheckedIcon={false} />
            </ToggleLabel>
        </ToggleWrapper>
    )
}

export default Toggle;