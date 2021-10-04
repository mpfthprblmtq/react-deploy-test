import {FunctionComponent, useEffect, useState} from "react";
import {Typography} from "@material-ui/core";
import axios, {AxiosResponse} from "axios";
import {StyledContainer} from "./TestComponent.styles";

interface DogData {
    message: string;
    status: string
}

const TestComponent: FunctionComponent = () => {

    const [url, setUrl] = useState<string>();

    useEffect(() => {
        axios.get('https://dog.ceo/api/breeds/image/random').then((response: AxiosResponse<DogData>) => {
            console.log(response.data);
            setUrl(response.data.message);
        });
    }, []);

    return (
        <StyledContainer>
            <Typography>This is the main test component!</Typography>
            <img src={url} alt={''}/>
        </StyledContainer>
    );
};

export default TestComponent;
