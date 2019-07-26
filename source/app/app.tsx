import * as React from "react";
import { Provider } from "react-redux";
import { Router } from "./router";
import { GlobalStyle, defaultTheme, ThemeProvider } from "./styles";
import { reduxStore } from "./store/store";
import { AppStateContainer } from "./containers/app-state-container";
import { Store } from "redux";

interface IProps {
    store: Store;
}

type Props = IProps;

export class App extends React.Component<Props> {
    public static defaultProps: Partial<Props> = {
        store: reduxStore,
    }

    public render(): React.ReactNode {
        return (
            <ThemeProvider theme={defaultTheme}>
                <Provider store={this.props.store}>
                    <GlobalStyle />
                    <AppStateContainer>
                        <Router />
                    </AppStateContainer>
                </Provider>
            </ThemeProvider>
        );
    }
}