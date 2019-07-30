import React from "react";

import styled from "../styles";
import logo from "../../../static/img/logo.png";
import logoOpenGraph from "../../../static/img/logo-open-graph.png";
import { is } from "../shared/is";

const logoSize = "256px";

const DivHeaderWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;

const DivLogo = styled.div`
    padding: ${s => s.theme.size.spacer};
    flex-basis: ${logoSize};
`;

const DivTitle = styled.div`
    flex-grow: 1;
    padding: 0 ${s => s.theme.size.spacer} 0 ${s => s.theme.size.spacer2};
    
    /* Not actually used, just here to get the file to copy */
    span.open-graph-logo {
        background: url(${logoOpenGraph});
    }
`;

const ImgLogo = styled.img`
    width: ${logoSize};
`;

interface IProps {
    title?: string;
}

export class Header extends React.PureComponent<IProps> {
    public render(): React.ReactNode {
        return (
            <header>
                <DivHeaderWrapper>
                    <DivLogo><ImgLogo src={logo} alt="Vanguard Outrider" /></DivLogo>
                    {!is.null(this.props.title) && (
                        <DivTitle>
                            <h1>{this.props.title}</h1>
                        </DivTitle>
                    )}
                </DivHeaderWrapper>
            </header>
        );
    }
}