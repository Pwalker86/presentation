import React, { Component } from 'react';


export default class Page extends Component {
    componentDidMount() {
        const { color, index } = this.props;
        this[`Page${index}`].style.background = color;
    }

    render() {
        const { isHiddenLeft, isHiddenRight, title, content, index, footer, header, iframe, image, imageStyle } = this.props; 
        return (
            <div className={`Page ${isHiddenLeft && 'hiddenleft'} ${isHiddenRight && 'hiddenright'} ${header && 'has-header'}`} 
                 ref={node => (this[`Page${index}`] = node)}>
                 {header && 
                    <div className="header">
                        {header}
                    </div>
                 }
                <div className={`title ${index === 0 && 'big'}`}>
                    {title}
                </div>
                <div className={`content ${index === 0 && 'big'}`}>
                    {typeof content === "string" &&
                        content
                    }
                    {content instanceof Array &&
                        <ul>
                            {content.map((c, i) => {
                                return <li key={i}>{c}</li>
                            })}
                        </ul>
                    }
                    {iframe && 
                        <iframe title={`iframe${index}`} src={iframe} width="100%" height="100%" />
                    }
                    {image && 
                        <img alt='' className={`${imageStyle === 'contain' && 'contain'}`} src={image} width="100%" height="100%" />
                    }
                </div>
                <div className="footer">
                    {footer ? footer : index}
                </div>
                <img alt='' className="logo" src="https://www.accessdevelopment.com/hs-fs/hubfs/AccessDevelopment_June2017/logo.png?t=1529951130710&width=138&name=logo.png" />
            </div>
        )
    }
}