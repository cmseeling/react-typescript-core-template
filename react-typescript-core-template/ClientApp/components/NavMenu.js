var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import { NavLink, Link } from 'react-router-dom';
var NavMenu = /** @class */ (function (_super) {
    __extends(NavMenu, _super);
    function NavMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //public render() {
    //    return <div className='main-nav'>
    //            <div className='navbar navbar-inverse'>
    //            <div className='navbar-header'>
    //                <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
    //                    <span className='sr-only'>Toggle navigation</span>
    //                    <span className='icon-bar'></span>
    //                    <span className='icon-bar'></span>
    //                    <span className='icon-bar'></span>
    //                </button>
    //                <Link className='navbar-brand' to={ '/' }>roll4initiative.Web</Link>
    //            </div>
    //            <div className='clearfix'></div>
    //            <div className='navbar-collapse collapse'>
    //                <ul className='nav navbar-nav'>
    //                    <li>
    //                        <NavLink exact to={ '/' } activeClassName='active'>
    //                            <span className='glyphicon glyphicon-home'></span> Home
    //                        </NavLink>
    //                    </li>
    //                    <li>
    //                        <NavLink to={ '/counter' } activeClassName='active'>
    //                            <span className='glyphicon glyphicon-education'></span> Counter
    //                        </NavLink>
    //                    </li>
    //                    <li>
    //                        <NavLink to={ '/fetchdata' } activeClassName='active'>
    //                            <span className='glyphicon glyphicon-th-list'></span> Fetch data
    //                        </NavLink>
    //                    </li>
    //                </ul>
    //            </div>
    //        </div>
    //    </div>;
    //}
    NavMenu.prototype.render = function () {
        return React.createElement("div", { className: 'main-nav' },
            React.createElement("div", { className: 'navbar navbar-inverse' },
                React.createElement("div", { className: 'navbar-header' },
                    React.createElement("button", { type: 'button', className: 'navbar-toggle', "data-toggle": 'collapse', "data-target": '.navbar-collapse' },
                        React.createElement("span", { className: 'sr-only' }, "Toggle navigation"),
                        React.createElement("span", { className: 'icon-bar' }),
                        React.createElement("span", { className: 'icon-bar' }),
                        React.createElement("span", { className: 'icon-bar' })),
                    React.createElement(Link, { className: 'navbar-brand', to: '/' }, "roll4initiative.Web")),
                React.createElement("div", { className: 'clearfix' }),
                React.createElement("div", { className: 'navbar-collapse collapse' },
                    React.createElement("ul", { className: 'nav navbar-nav' },
                        React.createElement("li", null,
                            React.createElement(NavLink, { exact: true, to: '/', activeClassName: 'active' },
                                React.createElement("span", { className: 'glyphicon glyphicon-home' }),
                                " Home")),
                        React.createElement("li", null,
                            React.createElement(NavLink, { to: '/counter', activeClassName: 'active' },
                                React.createElement("span", { className: 'glyphicon glyphicon-education' }),
                                " Counter"))))));
    };
    return NavMenu;
}(React.Component));
export { NavMenu };
//# sourceMappingURL=NavMenu.js.map